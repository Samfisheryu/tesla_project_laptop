import React from 'react'

interface ICreateFails {
    page: any;
    mode: any;
    user: any;
    onChangeForm: Function;
    createUser: Function;
}

function CreateData({page, mode, user, onChangeForm, createUser}: ICreateFails) {

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-7 mrgnbtm">
                    {mode === 'create' && <h2>
                        Create
                    </h2>}
                    {mode === 'delete' && <h2>
                        Delete
                    </h2>}
                    {mode === 'update' && <h2>
                        Update
                    </h2>}
                    <form>
                        <div className="row">
                            {(mode === 'create' && page === 'failmode') && <div className="form-group col-md-6">
                                <label htmlFor="exampleInputEmail1">Fail Mode Name</label>
                                <input type="text" onChange={(e) => onChangeForm(e)} className="form-control"
                                       name="fail_mode_name" id="fail_mode_name" aria-describedby="emailHelp"
                                       placeholder="Fail Mode Name"/>
                            </div>}
                            {(mode === 'create' && page === 'failmode') && <div className="form-group col-md-6">
                                <label htmlFor="exampleInputPassword1">Fail Code</label>
                                <input type="text" maxLength={6} onChange={(e) => onChangeForm(e)} className="form-control"
                                       name="fail_code" id="fail_code" placeholder="Fail Code"/>
                            </div>}
                            {(mode === 'create' && page === 'comp') && <div className="form-group col-md-6">
                                <label htmlFor="exampleInputEmail1">Manufacturer</label>
                                <input type="text" onChange={(e) => onChangeForm(e)} className="form-control"
                                       name="manufacturer" id="manufacturer" placeholder="Manufacturer"/>
                            </div>}
                            {(mode === 'create' && page === 'comp') && <div className="form-group col-md-6">
                                <label htmlFor="exampleInputPassword1">Contact</label>
                                <input type="text" onChange={(e) => onChangeForm(e)} className="form-control"
                                       name="contact" id="contact" placeholder="Contact"/>
                            </div>}
                            {(mode === 'create' && page === 'comp') && <div className="form-group col-md-6">
                                <label htmlFor="exampleInputPassword1">Failure Rate</label>
                                <input type="text" onChange={(e) => onChangeForm(e)} className="form-control"
                                       name="failure_rate" id="failure_rate" placeholder="Failure Rate"/>
                            </div>}
                            {(mode === 'create' && page === 'comp') && <div className="form-group col-md-6">
                                <label htmlFor="exampleInputPassword1">Component Name</label>
                                <input type="text" onChange={(e) => onChangeForm(e)} className="form-control"
                                       name="component_name" id="component_name" placeholder="Component Name"/>
                            </div>}
                            {(mode === 'create' && page === 'mapping') && <div className="form-group col-md-6">
                                <label htmlFor="exampleInputEmail1">Component ID</label>
                                <input type="text" onChange={(e) => onChangeForm(e)} className="form-control"
                                       name="component_id" id="component_id" placeholder="Component ID"/>
                            </div>}
                            {(mode === 'create' && page === 'mapping') && <div className="form-group col-md-6">
                                <label htmlFor="exampleInputPassword1">Failure Mode ID</label>
                                <input type="text" onChange={(e) => onChangeForm(e)} className="form-control"
                                       name="failmode_id" id="failmode_id" placeholder="Failure Mode ID"/>
                            </div>}
                            {mode === 'delete' && <div className="form-group col-md-6">
                                <label htmlFor="exampleInputPassword1">ID</label>
                                <input type="text" onChange={(e) => onChangeForm(e)} className="form-control"
                                       name="ID" id="ID" placeholder="ID"/>
                            </div>}
                            {mode === 'update' && <div className="form-group col-md-6">
                                <label htmlFor="exampleInputPassword1">ID</label>
                                <input type="text" onChange={(e) => onChangeForm(e)} className="form-control"
                                       name="ID" id="ID" placeholder="ID"/>
                            </div>}
                            {(mode === 'update' && page === 'failmode') && <div className="form-group col-md-6">
                                <label htmlFor="exampleInputEmail1">Fail Mode Name</label>
                                <input type="text" onChange={(e) => onChangeForm(e)} className="form-control"
                                       name="fail_mode_name" id="fail_mode_name" aria-describedby="emailHelp"
                                       placeholder="Fail Mode Name"/>
                            </div>}
                            {(mode === 'update' && page === 'failmode') && <div className="form-group col-md-6">
                                <label htmlFor="exampleInputPassword1">Fail Code</label>
                                <input type="text" onChange={(e) => onChangeForm(e)} className="form-control"
                                       name="fail_code" id="fail_code" placeholder="Fail Code"/>
                            </div>}
                            {(mode === 'update' && page === 'comp') && <div className="form-group col-md-6">
                                <label htmlFor="exampleInputEmail1">Manufacturer</label>
                                <input type="text" onChange={(e) => onChangeForm(e)} className="form-control"
                                       name="manufacturer" id="manufacturer" placeholder="Manufacturer"/>
                            </div>}
                            {(mode === 'update' && page === 'comp') && <div className="form-group col-md-6">
                                <label htmlFor="exampleInputPassword1">Contact</label>
                                <input type="text" onChange={(e) => onChangeForm(e)} className="form-control"
                                       name="contact" id="contact" placeholder="Contact"/>
                            </div>}
                            {(mode === 'update' && page === 'comp') && <div className="form-group col-md-6">
                                <label htmlFor="exampleInputPassword1">Failure Rate</label>
                                <input type="text" onChange={(e) => onChangeForm(e)} className="form-control"
                                       name="failure_rate" id="failure_rate" placeholder="Failure Rate"/>
                            </div>}
                            {(mode === 'update' && page === 'comp') && <div className="form-group col-md-6">
                                <label htmlFor="exampleInputPassword1">Component Name</label>
                                <input type="text" onChange={(e) => onChangeForm(e)} className="form-control"
                                       name="component_name" id="component_name" placeholder="Component Name"/>
                            </div>}
                            {(mode === 'update' && page === 'mapping') && <div className="form-group col-md-6">
                                <label htmlFor="exampleInputEmail1">Component ID</label>
                                <input type="text" onChange={(e) => onChangeForm(e)} className="form-control"
                                       name="component_id" id="component_id" placeholder="Component ID"/>
                            </div>}
                            {(mode === 'update' && page === 'mapping') && <div className="form-group col-md-6">
                                <label htmlFor="exampleInputPassword1">Failure Mode ID</label>
                                <input type="text" onChange={(e) => onChangeForm(e)} className="form-control"
                                       name="failmode_id" id="failmode_id" placeholder="Failure Mode ID"/>
                            </div>}
                        </div>
                        {mode === 'create' && <button type="button" onClick={(e) => createUser()}
                                                      className="btn btn-danger mrgnbtm">Create
                        </button>}
                        {mode === 'delete' && <button type="button" onClick={(e) => createUser()}
                                                      className="btn btn-danger mrgnbtm">Delete
                        </button>}
                        {mode === 'update' && <button type="button" onClick={(e) => createUser()}
                                                      className="btn btn-danger mrgnbtm">Update
                        </button>}
                    </form>
                </div>
            </div>
        </div>
    )
}

export
{
    CreateData
}

