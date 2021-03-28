import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Problem } from '../../Reducers/problems'
import { getCurrentProblem } from '../../Selectors/problems'
import styles from './SidebarProblemSection.module.scss'
import { useParams } from 'react-router-dom'

type Props = {
    problems: Problem[]
    sectionTitle: string
}

const renderProblems = (problems: Problem[], category: string, currentProblemId: string) => {
    return (
        problems.map(problem => 
        <div className={currentProblemId === problem.id ? styles.activeProblemWrapper : styles.problemWrapper} key={problem.id}>
            <Link to={`/problem/${category}/${problem.id}`}><p className={styles.problemTitle} >{problem.title}</p></Link>
        </div>)
    )
}

function ProblemSection(props: Props) {
    const { id } = useParams()
    const currentProblem = useSelector(getCurrentProblem(id))
    return (
        <div className={styles.sectionWrapper} >
            <p className={styles.sectionTitle}>{props.sectionTitle}</p>
            <div className={styles.problemsWrapper}>
                    {renderProblems(props.problems, props.sectionTitle, currentProblem?.id)}
            </div>

        </div>
    )
}

export default ProblemSection