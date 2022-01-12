import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Problem } from '../../Reducers/problems'
import { getCompletedProblems } from '../../Selectors/user'


type Props = {
    sectionTitle: string,
    problems: Problem[]
}


const renderProblems = (problems: Problem[], blockTitle: string, completedProblems: Set<string>) => {
    return (
        problems.map((problem) => 
                <Link key={problem.id} className="mm-bullet dark:text-gray-200 text-gray-700 pt-2 pb-2 rounded-md pr-8 mr-2 pl-12 dark:hover:text-gray-900 hover:text-gray-900 md:text-lg hover:bg-blue-100 transition easy-in-out duration-100"  to={`/problem/${blockTitle}/${problem.id}`}>{problem.title}</Link>
            )
    )
}

function ProblemSection(props: Props) {
    const completedProblems = useSelector(getCompletedProblems)

    return (
        <div className="flex flex-row justify-center pl-4" >
            <p className="dark:text-gray-50 pr-4 pt-2 font-semibold text-xl">{props.sectionTitle}</p>
            <div className="flex flex-col">
                    {renderProblems(props.problems, props.sectionTitle, completedProblems)}
            </div>

        </div>
    )
}

export default ProblemSection