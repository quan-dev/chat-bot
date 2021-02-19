import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { layoutActions, layoutSelectors } from '../../state/ducks/layout';
import { useMemoSelector } from '../../state/utils/use-memo-selector';
import Slidebar from './slidebar';
import Topbar from './topbar';

export type FullLayoutProps = {
  children: React.ReactNode;
};

const Dashboard: React.FC<FullLayoutProps> = props => {
  const dispatch = useDispatch();

  const getClassSlideBar = useMemoSelector(layoutSelectors.getClassSlideBar);

  const setClassnameSlidebar = useCallback(
    (id: string) => {
      dispatch(layoutActions.setClassnameSlidebar(id));
    },
    [
      dispatch
    ],
  );

  const setShowSlidebar = () => {
    setClassnameSlidebar(getClassSlideBar ? '' : 'toggled');
  };

  return (
    <div>
      <div id="wrapper">
        {/* Sidebar */}
        <Slidebar setShowSlidebar={setShowSlidebar} />
        {/* End of Sidebar */}
        {/* Content Wrapper */}
        <div id="content-wrapper" className="d-flex flex-column">
          {/* Main Content */}
          <div id="content">
            {/* Topbar */}
            <Topbar setShowSlidebar={setShowSlidebar} />
            {/* End of Topbar */}
            {/* Begin Page Content */}
            {props.children ? props.children : <></>}
            {/* /.container-fluid */}
          </div>
          {/* End of Main Content */}
        </div>
        {/* End of Content Wrapper */}
      </div>
      {/* End of Page Wrapper */}
      {/* Scroll to Top Button*/}
      <div className="scroll-to-top rounded">
        <i className="fas fa-angle-up" />
      </div>
      {/* Logout Modal*/}
      <div
        className="modal fade"
        id="logoutModal"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Ready to Leave?
              </h5>
              <button
                className="close"
                type="button"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              Select "Logout" below if you are ready to end your current
              session.
            </div>
            <div className="modal-footer">
              <button
                className="btn btn-secondary"
                type="button"
                data-dismiss="modal"
              >
                Cancel
              </button>
              <div className="btn btn-primary">Logout</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default React.memo(Dashboard);
