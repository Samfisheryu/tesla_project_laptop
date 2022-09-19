import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {FailsH, CompH, MappingH} from './components/Header';
import {CreateData} from './components/CreateUser';
import DisplayBoard from './components/DisplayBoard';
import {AppService} from './services/app.service';
import {Users} from './components/Users';
import Chart from "./components/echarts";
import React, {useEffect, useState} from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import ReactEcharts from "echarts-for-react";
import Nav from "./components/Nav";
import NewHeader from "./components/NewHeader";
function App() {
    return (
        <Router>
            <Routes>
                <Route path="failure/*" element={<Fail/>}/>
                <Route path="components/*" element={<Comp/>}/>
                <Route path="mapping/*" element={<Mapping/>}/>
                <Route path="/*" element={<Index/>}/>
            </Routes>
        </Router>
    );
}

function Index() {
    const appService = new AppService();
    const [HighestPFR,setHPFR] = useState<any>({});
    const [MostUSED,setMostUSED] = useState<any>({});
    const [BadComp,setBComp] = useState<any>({});
    useEffect(() => {
        console.log("executed only once!");
        get_5_bad_comp();
        get_most_used();
        get_highest_PFR();
    }, []);
    const get_5_bad_comp = async () => {
        const bad_comp = await appService.get_bad_comp()
        const option = {
        color: [

            '#91c7ae',
            '#749f83',
            '#ca8622',

        ],
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow',
                label: {
                    show: true
                }
            }
        },
        toolbox: {
            show: true,
            feature: {
                mark: {show: true},
                dataView: {show: true, readOnly: false},
                magicType: {show: true, type: ['line', 'bar']},
                restore: {show: true},
                saveAsImage: {show: true}
            }
        },
        grid: {
            top: '12%',
            left: '1%',
            right: '10%',
            containLabel: true
        },
        xAxis: {
            axisTick: {
                alignWithLabel: true
            },
            type: 'category',
            data: bad_comp.map((x: any[]) => x[1] + ',' + x[4])
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                data: bad_comp.map((x: any[]) => x[3]),
                type: 'bar',
                barWidth: '20%'
            }
        ]
    };
        setBComp(option)
    }
    const get_most_used = async () => {
        const mus = await appService.get_m_used();
        const option = {
        color: [
            '#c23531',
            '#2f4554',
            '#61a0a8',
            '#d48265',
            '#91c7ae',
            '#749f83',
            '#ca8622',
            '#bda29a',
            '#6e7074',
            '#546570',
            '#c4ccd3'
        ],
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow',
                label: {
                    show: true
                }
            }
        },
        toolbox: {
            show: true,
            feature: {
                mark: {show: true},
                dataView: {show: true, readOnly: false},
                magicType: {show: true, type: ['line', 'bar']},
                restore: {show: true},
                saveAsImage: {show: true}
            }
        },
        grid: {
            top: '12%',
            left: '1%',
            right: '10%',
            containLabel: true
        },
        xAxis: {
            axisTick: {
                alignWithLabel: true
            },
            type: 'category',
            data: mus.map((x: any[]) => x[0])

        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                name: 'TOP 5 Most Used Components',
                data: mus.map((x: any[]) => x[1]),
                type: 'bar',
                barWidth: '20%'
            }
        ]
    };
        setMostUSED(option)
    }
    const get_highest_PFR = async () => {
        const hp = await appService.get_h_PFR();
        const option = {
        color: [
            '#d48265',
            '#91c7ae',
            '#749f83',
            '#ca8622',
            '#bda29a',
            '#6e7074',
            '#546570',
            '#c4ccd3'
        ],
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow',
                label: {
                    show: true
                }
            }
        },
        toolbox: {
            show: true,
            feature: {
                mark: {show: true},
                dataView: {show: true, readOnly: false},
                magicType: {show: true, type: ['line', 'bar']},
                restore: {show: true},
                saveAsImage: {show: true}
            }
        },
        grid: {
            top: '12%',
            left: '1%',
            right: '10%',
            containLabel: true
        },
        xAxis: {
            axisTick: {
                alignWithLabel: true
            },
            type: 'category',
            data: hp.map((x: any[]) => x[0])

        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                data: hp.map((x: any[]) => x[1]),
                type: 'bar',
                barWidth: '20%'
            }
        ]
    };
        setHPFR(option);
    }

    return (
        <div className="App">
            <Nav/>
            <NewHeader/>
            <div className="container mrgnbtm">
                <h1>
                    Top 5 of the Most Bad Quality Components
                </h1>
                <div className="row mrgnbtm">
                    <ReactEcharts option={BadComp}></ReactEcharts>
                </div>
                <h1>
                    Top 5 of the Most Used Components
                </h1>
                <div className="row mrgnbtm">
                    <ReactEcharts option={MostUSED}></ReactEcharts>
                </div>
                <h1>
                    Top 3 of the Highest PFR(Product Failure Rate) Manufacturer.
                </h1>
                <div className="row mrgnbtm">
                    <Chart hPFR={HighestPFR}></Chart>
                </div>
            </div>

        </div>
    );

}


function Fail() {
    const appService = new AppService();

    const [fail, setFail] = useState<any>();
    const [fails, setFails] = useState<any>([]);
    const [numberOfFails, setNumberOfFails] = useState<number>(0);

    const createFail = async (e: any) => {
        const response = await appService.addFails(fail);
        console.log(response);
        setNumberOfFails(numberOfFails + 1);
        getAllFails()
    }
    const deleteFail = async (e: any) => {
        const response = await appService.deleteFails(fail);
        console.log(response);
        setNumberOfFails(numberOfFails - 1);
        getAllFails()
    }
    const updateFail = async (e: any) => {
        const response = await appService.updateFails(fail);
        console.log(response);
        getAllFails()
    }

    const getAllFails = async () => {
        const users = await appService.getFails();
        // const users = "haha"
        setFails(users);
        setNumberOfFails(users.length);
    }
    // getAllUsers()
    useEffect(() => {
        console.log("executed only once!");
        getAllFails();
    }, []);
    //
    const onChangeForm = (e: any) => {
        let userClone = {...fail}
        if (e.target.name === 'fail_mode_name') {
            userClone.fail_mode_name = e.target.value;
        } else if (e.target.name === 'fail_code') {
            userClone.fail_code = e.target.value;
        } else if (e.target.name === 'ID') {
            userClone.id = e.target.value;
        }
        setFail(userClone);
    }

    return (
        <div className="App">
            <Nav/>
            <FailsH/>
            <div className="container mrgnbtm">
                <div className="row">
                    <div className="col-md-8">
                        <CreateData
                            page={'failmode'}
                            mode={'create'}
                            user={fail}
                            onChangeForm={onChangeForm}
                            createUser={createFail}
                        />
                    </div>
                    <div className="col-md-8">
                        <CreateData
                            page={'failmode'}
                            mode={'delete'}
                            user={fail}
                            onChangeForm={onChangeForm}
                            createUser={deleteFail}
                        />
                    </div>
                    <div className="col-md-8">
                        <CreateData
                            page={'failmode'}
                            mode={'update'}
                            user={fail}
                            onChangeForm={onChangeForm}
                            createUser={updateFail}
                        />
                    </div>
                    <div className="col-md-4">
                        <DisplayBoard
                            numberOfUsers={numberOfFails}
                        />
                    </div>
                </div>
                <div className="row mrgnbtm">
                    <Users users={fails}></Users>
                </div>
            </div>
        </div>
    );

}

function Comp() {
    const appService = new AppService();

    const [comp, setComp] = useState<any>();
    const [comps, setComps] = useState<any>([]);
    const [numberOfcomps, setNumberOfComps] = useState<number>(0);


    const createComp = async (e: any) => {
        const response = await appService.addComps(comp);
        console.log(response);
        setNumberOfComps(numberOfcomps + 1);
        getAllComp()
    }
    const deleteComp = async (e: any) => {
        const response = await appService.deleteComps(comp);
        console.log(response);
        setNumberOfComps(numberOfcomps - 1);
        getAllComp()
    }
    const updateComp = async (e: any) => {
        const response = await appService.updateComps(comp);
        console.log(response);
        getAllComp()
    }

    const getAllComp = async () => {
        const comps = await appService.getComps();
        // const users = "haha"
        setComps(comps);
        setNumberOfComps(comps.length);
    }
    // getAllUsers()
    useEffect(() => {
        console.log("executed only once!");
        getAllComp();
    }, []);
    //
    const onChangeForm = (e: any) => {
        let userClone = {...comp}
        if (e.target.name === 'manufacturer') {
            userClone.manufacturer = e.target.value;
        } else if (e.target.name === 'contact') {
            userClone.contact = e.target.value;
        } else if (e.target.name === 'failure_rate') {
            userClone.failure_rate = e.target.value;
        } else if (e.target.name === 'component_name') {
            userClone.component_name = e.target.value;
        } else if (e.target.name === 'ID') {
            userClone.id = e.target.value;
        }
        setComp(userClone);
    }

    return (
        <div className="App">
            <Nav/>
            <CompH/>
            <div className="container mrgnbtm">
                <div className="row">
                    <div className="col-md-8">
                        <CreateData
                            page={'comp'}
                            mode={'create'}
                            user={comp}
                            onChangeForm={onChangeForm}
                            createUser={createComp}
                        />
                    </div>
                    <div className="col-md-8">
                        <CreateData
                            page={'comp'}
                            mode={'delete'}
                            user={comp}
                            onChangeForm={onChangeForm}
                            createUser={deleteComp}
                        />
                    </div>
                    <div className="col-md-8">
                        <CreateData
                            page={'comp'}
                            mode={'update'}
                            user={comp}
                            onChangeForm={onChangeForm}
                            createUser={updateComp}
                        />
                    </div>
                    <div className="col-md-4">
                        <DisplayBoard
                            numberOfUsers={numberOfcomps}
                        />
                    </div>
                </div>
                <div className="row mrgnbtm">
                    {/*<Users users={users}></Users>*/}
                    <Users
                        users={comps}
                    />
                </div>
            </div>
        </div>
    );

}


function Mapping() {
    const appService = new AppService();

    const [mapping, setMapping] = useState<any>();
    const [mappings, setMappings] = useState<any>([]);
    const [numberOfMappings, setNumberOfMappings] = useState<number>(0);
    const createMapping = async (e: any) => {
        const response = await appService.addMapping(mapping);
        console.log(response);
        setNumberOfMappings(numberOfMappings + 1);
        getAllMapping()
    }
    const deleteMapping = async (e: any) => {
        const response = await appService.deleteMapping(mapping);
        console.log(response);
        setNumberOfMappings(numberOfMappings - 1);
        getAllMapping()
    }
    const updateMapping = async (e: any) => {
        const response = await appService.updateMapping(mapping);
        console.log(response);
        getAllMapping()
    }

    const getAllMapping = async () => {
        const users = await appService.getMapping();
        // const users = "haha"
        setMappings(users);
        setNumberOfMappings(users.length);
    }

    useEffect(() => {
        console.log("executed only once!");
        getAllMapping();
    }, []);

    const onChangeForm = (e: any) => {
        let userClone = {...mapping}
        if (e.target.name === 'component_id') {
            userClone.component_id = e.target.value;
        } else if (e.target.name === 'failmode_id') {
            userClone.failmode_id = e.target.value;
        }
        setMapping(userClone);
    }

    const option = {
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                data: [120, 200, 150, 80, 70, 110, 130],
                type: 'bar'
            }
        ]
    };


    return (
        <div className="App">
            <Nav/>
            <MappingH/>
            <div className="container mrgnbtm">
                <div className="row">
                    <div className="col-md-8">
                        <CreateData
                            page={'mapping'}
                            mode={'create'}
                            user={mapping}
                            onChangeForm={onChangeForm}
                            createUser={createMapping}
                        />
                    </div>
                    <div className="col-md-8">
                        <CreateData
                            page={'mapping'}
                            mode={'delete'}
                            user={mapping}
                            onChangeForm={onChangeForm}
                            createUser={deleteMapping}
                        />
                    </div>
                    <div className="col-md-8">
                        <CreateData
                            page={'mapping'}
                            mode={'update'}
                            user={mapping}
                            onChangeForm={onChangeForm}
                            createUser={updateMapping}
                        />
                    </div>
                    <div className="col-md-4">
                        <DisplayBoard
                            numberOfUsers={numberOfMappings}
                            // getAllUsers={getAllUsers}
                        />
                    </div>
                </div>
                <div className="row mrgnbtm">
                    <Users users={mappings}></Users>
                </div>
            </div>
        </div>
    );

}

export default App;