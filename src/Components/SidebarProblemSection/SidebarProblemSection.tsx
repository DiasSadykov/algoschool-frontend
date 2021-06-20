import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Problem } from '../../Reducers/problems'
import { getCurrentProblem } from '../../Selectors/problems'
import { useParams } from 'react-router-dom'
import { getCompletedProblems } from '../../Selectors/user'

type Props = {
    problems: Problem[]
    sectionTitle: string
}

const renderProblems = (problems: Problem[], category: string, currentProblemId: string, completedProblems: Set<string>) => {
    return (
        problems.map(problem => {
            return <Link className="bullet dark:text-gray-200 dark:hover:text-gray-900 text-gray-700 pt-2 pb-2 rounded-md pr-8 mr-2 pl-8 transition easy-in-out duration-100 hover:bg-gray-100" to={`/problem/${category}/${problem.id}`}>{problem.title}</Link>
        }
        )
    )
}

function ProblemSection(props: Props) {
    const { id } = useParams()
    const currentProblem = useSelector(getCurrentProblem(id))
    const completedProblems = useSelector(getCompletedProblems)
    return (
        <div className="pl-4" >
            <h2 className="dark:text-gray-50 ont-semibold text-gray-800 mt-6 mb-4">{props.sectionTitle}</h2>
            <div className="flex flex-col">
                    {renderProblems(props.problems, props.sectionTitle, currentProblem?.id, completedProblems)}
            </div>

        </div>
    )
}

export default ProblemSection