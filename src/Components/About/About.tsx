import React from 'react'
import { Layout, Typography, Row, Space, Col, Image } from 'antd'
import Navbar from '../Navbar/Navbar';
import Emoji from '../Emoji/Emoji';

const { Title, Text, Paragraph } = Typography
const { Content } = Layout
function About() {
    return (
        <Layout>
            <Navbar />
            <Content style={{ marginBottom: 500, marginTop: 150 }}>
                <Row justify="center">
                    <Col xs={18} md={8} sm={12}>
                        <Space direction="vertical" size="large">
                            <Paragraph>
                                <Title> About <Emoji symbol="🗿" /></Title>
                                <Text> This page is another attempt to make the Tech companies application process
                                less stressfull and more enjoyable. The website/app provides a number of the most popular
                                and skill intensive problems which <i>you may and may not</i> encounter with text and video explanations.
                            </Text>
                            </Paragraph>
                            <Paragraph>
                                <Title> Contacts <Emoji symbol="🌚" /></Title>
                                <Text> You can write me at <a href={"mailto:dias.sadykov0@gmail.com"}>dias.sadykov0@gmail.com</a>.</Text>
                            </Paragraph>
                            <Image src="https://cdn.dribbble.com/users/720428/screenshots/5061444/office_work.png"></Image>
                        </Space>
                    </Col>
                </Row>
            </Content>

        </Layout>
    )
}

export default About;