import React from 'react'
import { useSelector } from 'react-redux';
import { getCurrentSubmissionStatus, getIsSubmissionFetching } from '../../Selectors/submission';
import Loading from '../Loading/Loading';
import styles from './SubmissionStatus.module.scss'


function SubmissionStatus() {
    const submissionStatus = useSelector(getCurrentSubmissionStatus)
    const isFetching = useSelector(getIsSubmissionFetching)
    return (
        <>
        {isFetching? <Loading></Loading>:
        <div className={styles.controls}>
            <p className={submissionStatus?.status==="Accepted" ? styles.acceptedTitle : styles.errorTitle}>{submissionStatus?.status}</p>
            {submissionStatus?.message ?
                 <div className={styles.resultErrorMessage}>{submissionStatus?.message}</div> 
             : null }
            {submissionStatus?.input ? <div className={styles.resultInfo}>
                <div className={styles.resultLabel}>Test Input</div>
                <div className={styles.resultInfoValue}>{submissionStatus?.input}</div>
            </div> : null}
            {submissionStatus?.expected ?
            <div className={styles.resultInfo}>
                <div className={styles.resultLabel}>Expected</div> 
                <div className={styles.resultInfoValue}>{submissionStatus?.expected}</div>
            </div> : null }
            {submissionStatus?.result ?
            <div className={styles.resultInfo}>
                <div className={styles.resultLabel}>Result</div>
                <div className={styles.resultInfoValue}>{submissionStatus?.result}</div>
            </div> : null }
        </div> }
        </>

    )
}

export default SubmissionStatus;