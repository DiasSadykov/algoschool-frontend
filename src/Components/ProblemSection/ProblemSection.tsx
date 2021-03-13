import React from 'react'
import { Link } from 'react-router-dom'
import { Problem } from '../../Reducers/problems'
import styles from './ProblemSection.module.scss'


type Props = {
    sectionTitle: string,
    problems: Problem[]
}


const renderProblems = (problems: Problem[], category: string) => {
    return (
        problems.map(problem => 
            <div className={styles.problemWrapper} key={problem.id}>
                <Link to={`/problem/${category}/${problem.id}`}><p className={styles.problemTitle} >{problem.title}</p></Link>
            </div>)
    )
}

function ProblemSection(props: Props) {
    return (
        <div className={styles.sectionWrapper} >
            <p className={styles.sectionTitle}>{props.sectionTitle}</p>
            <div className={styles.problemsWrapper}>
                    {renderProblems(props.problems, props.sectionTitle)}
            </div>

        </div>
    )
}

export default ProblemSection