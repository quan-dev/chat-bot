import React, { useMemo } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import { items } from '../../nav';
import { layoutSelectors } from '../../state/ducks/layout';
import { useMemoSelector } from '../../state/utils/use-memo-selector';

type Props = {
  setShowSlidebar: VoidFunction
}

const Slidebar: React.FC<Props> = ({ setShowSlidebar }) => {

  const getClassSlideBar = useMemoSelector(layoutSelectors.getClassSlideBar);

  const location = useLocation();

  const history = useHistory();

  const pathName = useMemo(() => {
    const currentPath = location.pathname;

    if (currentPath) {
      return `/${currentPath.split('/')[1]}`;
    }
  }, [
    location
  ]);

  const onClickItem = (url: string) => {
    history.push(url);
  };

  return (
    <>
      <ul className={`navbar-nav bg-gradient-primary sidebar sidebar-dark accordion ${getClassSlideBar}`} id="sildebar-cus">
        {/* Nav Item - Tables */}
        <div className="sidebar-brand d-flex align-items-center justify-content-center">
          <div className="sidebar-brand-icon rotate-n-15">
            <i className="fas fa-comments" />
          </div>
          <div className="sidebar-brand-text mx-3">CHATBOT</div>
        </div>
        <hr className="sidebar-divider my-0" />

        {
          items.map((i: any, index: number) => {
            return (<li className={pathName === i.url ? 'nav-item active' : 'nav-item'} key={`slidebar${index}`} style={{ cursor: 'pointer' }}>
              <div className="nav-link" onClick={() => onClickItem(i.url)}>
                <i className={i.icon} />
                <span>{i.name}</span></div>
            </li>);
          })
        }

        {/* Divider */}
        <hr className="sidebar-divider d-none d-md-block" />
        {/* Sidebar Toggler (Sidebar) */}
        <div className="text-center d-none d-md-inline">
          <button className="rounded-circle border-0" id="sidebarToggle" onClick={setShowSlidebar} />
        </div>
      </ul>
    </>
  );
};

export default React.memo(Slidebar);