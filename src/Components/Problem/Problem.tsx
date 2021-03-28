import { Layout, Result } from 'antd'
import React from 'react'
import { useParams } from 'react-router-dom'
import Sidebar from '../Sidebar/Sidebar'
import Navbar from '../Navbar/Navbar'
import styles from './Problem.module.scss'
import AceEditor from 'react-ace';
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/theme-textmate";
import "ace-builds/src-noconflict/ext-language_tools.js";
import SubmissionStatus from '../SubmissionStatus/SubmissionStatus'
import { useDispatch, useSelector } from 'react-redux'
import { getCurrentProblem, isFetchingProblems } from '../../Selectors/problems'
import { setCodeForProblem, submitCode  } from '../../Actions/problems'
import Loading from '../Loading/Loading'
import Emoji from '../Emoji/Emoji'

function Problem() {
    const { id } = useParams()
    const currentProblem = useSelector(getCurrentProblem(id))
    const isFetching = useSelector(isFetchingProblems)
    const dispatch = useDispatch()

    function onSubmit() {
        dispatch(submitCode(id))
    }

    function onChange(value) {
        dispatch(setCodeForProblem(id, value))
    }

    return (
        <>
            { isFetching ? <Loading /> :
                <Layout>
                    <Navbar />
                    {currentProblem ?
                        <>
                            <Sidebar />
                            <div className={styles.wrapper}>
                                <div className={styles.problemWrapper}>
                                    <div className={styles.problemTitle}>{currentProblem.title}</div>
                                    <div dangerouslySetInnerHTML={{ __html: currentProblem.description }} className={styles.description}>
                                    </div>
                                </div>
                                <div className={styles.editor}>
                                    <div className={styles.icons}>
                                        <div className={styles.close} />
                                        <div className={styles.minimize} />
                                        <div className={styles.zoom} />
                                    </div>

                                    <AceEditor className={styles.aceEditor} onChange={onChange} showPrintMargin={false} height="60%" width="100%" mode="python" theme="textmate" value={currentProblem.codeSnippet} enableBasicAutocompletion={true} showGutter={false} enableLiveAutocompletion={true} setOptions={{
                                        enableLiveAutocompletion: true,
                                        enableSnippets: false,
                                        showLineNumbers: false,
                                        tabSize: 2,
                                    }} />
                                    <SubmissionStatus />
                                    <button onClick={onSubmit} className={styles.submitButton}>Submit <Emoji symbol="🍪" /></button>
                                </div>
                            </div>
                        </>
                        : <Result
                            style={{ marginTop: "100px" }}
                            status="404"
                            title="403"
                            subTitle="Sorry, the page you visited does not exist."
                        />}
                </Layout>
            }
        </>

    )
}

export default Problem