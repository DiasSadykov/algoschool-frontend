import React from 'react'
import { useSelector } from 'react-redux'
import { getAllProblems } from '../../Selectors/problems'
import SidebarProblemSection from '../SidebarProblemSection/SidebarProblemSection'
import styles from './Sidebar.module.scss'

function Sidebar() {
    const problems = useSelector(getAllProblems)
    return (
        <div
            className={styles.sidebar}
        >
            {problems.map(problemSet => <SidebarProblemSection problems={problemSet.problems} sectionTitle={problemSet.category}/>)}
        </div>
    )
}

export default Sidebar