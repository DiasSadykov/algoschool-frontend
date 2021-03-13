import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Layout, Typography, Row, Col, Image } from 'antd'
import Logo from '../Logo/Logo';
import programming from "./images/programming.png"
import ProblemSection from '../ProblemSection/ProblemSection';
import Emoji from '../Emoji/Emoji';
import Navbar from '../Navbar/Navbar';
import { getAllProblems, isFetchingProblems } from '../../Selectors/problems';
import { fetchProblems } from '../../Actions/problems';
import Loading from '../Loading/Loading';

const { Title } = Typography
const { Content } = Layout

function ProblemList() {
    const problems = useSelector(getAllProblems)
    const isFetching = useSelector(isFetchingProblems)
    const dispatch = useDispatch()

    useEffect(() => {
        if (isFetching) {
            dispatch(fetchProblems)
        }
    });
    return (
        <>
        { isFetching ? <Loading /> :
        <Layout>
            <Navbar />
            <Content style={{ marginBottom: 500, marginTop: 100 }}>
                <Row justify="center">
                    <Col xs={18} md={12} sm={12}>
                        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                            <Logo fontSize={"4rem"} />
                            <Title style = {{color:"#a0aec0", fontSize:"1.5rem", textAlign:"center", marginBottom:"4rem"}}>Everything you need for coding interviews, in one platform<Emoji symbol="🧑‍💻"/></Title>
                        </div>
                        {problems.map(problemSet=><ProblemSection sectionTitle={problemSet.category} problems={problemSet.problems}/>)}
                        <div style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
                            <Image width="25rem" src={programming}></Image>
                        </div>
                    </Col>
                </Row>
            </Content>
        </Layout>
        }
        </>
    )
}

export default ProblemList