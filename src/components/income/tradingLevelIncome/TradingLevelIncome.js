
import React from 'react'
import Breadcrumbs from '../../../common/breadcrumb/Breadcrumbs';
import { Pagination } from 'antd';
import TradingLevelIncomeFilter from './tradingLevelIncomeFilter/TradingLevelIncomeFilter';

const TradingLevelIncome = () => {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Income",
        title_2: "Trading Level Income",
        path_2: ""
    };
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <TradingLevelIncomeFilter />
            <div className="row m-4">
                {/* {loading && <Loadar />} */}
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption">
                                    <h4 className="heading mb-0">Trading Level Income</h4>
                                    {/* <div>
                                        <Link className="btn btn-primary btn-sm" to="/add-blog" role="button" aria-controls="offcanvasExample">+ Blog Master</Link>
                                    </div> */}
                                </div>
                                <div id="empoloyees-tblwrapper_wrapper" className="dataTables_wrapper no-footer">
                                    <div className="dt-buttons">
                                        <button className="dt-button buttons-excel buttons-html5 btn btn-sm border-0" tabIndex={0} aria-controls="empoloyees-tblwrapper" type="button">
                                            <span><i className="fa-solid fa-file-excel" /> Export Report</span>
                                        </button>
                                    </div>
                                    <table id="empoloyees-tblwrapper" className="table dataTable no-footer" role="grid" aria-describedby="empoloyees-tblwrapper_info">
                                        <thead>
                                            <tr role="row">
                                                <th style={{ width: '50px' }}>S.NO</th>
                                                <th style={{ width: '150px' }}>Level</th>
                                                <th style={{ width: '150px' }}>Income</th>
                                                <th style={{ width: '150px' }}>Date</th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                            <tr role="row" className="odd" key={''}>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                {/* <td>
                                                    <div className="d-flex">
                                                        <Link to={`#`} className="btn btn-primary shadow btn-xs sharp me-1">
                                                            <i className="fa fa-pencil" />
                                                        </Link>
                                                        <Popconfirm
                                                            title="Delete Blog"
                                                            description="Are you sure to delete?"
                                                            // onConfirm={() => confirm(item?._id)}
                                                            // onCancel={cancel}
                                                            okText="Yes"
                                                            cancelText="No"
                                                        >
                                                            <Link to="#" className="btn btn-danger shadow btn-xs sharp">
                                                                <i className="fa fa-trash" />
                                                            </Link>
                                                        </Popconfirm>
                                                    </div>
                                                </td> */}
                                            </tr>

                                        </tbody>
                                    </table>
                                    <div className="dataTables_info" id="empoloyees-tblwrapper_info" role="status" aria-live="polite">
                                        Total {0} entries
                                    </div>
                                    <div className="dataTables_paginate paging_simple_numbers" id="empoloyees-tblwrapper_paginate">
                                        <Pagination
                                        // defaultCurrent={1}
                                        // onChange={onChangeVal}
                                        // total={data?.totalCount}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TradingLevelIncome