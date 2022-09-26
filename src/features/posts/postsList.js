import { Row, Col, Card, Spin, Alert } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "./postsSlice";

function PostsList() {
    const dispatch = useDispatch()
    const allPosts = useSelector((state) => state.posts.entities)
    const postsState = useSelector((state) => state.posts)

    useEffect(() => {
        dispatch(getPosts())
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className="site-card-wrapper">
            {!!postsState?.loading && (
                <div className="spinner">
                    <Spin size="large" />
                </div>
            )}
            <Row gutter={[16, 16]}>
                {allPosts.map((item, index) => (
                    <Col span={8} key={index}>
                        <Card title={`${item.title}`}>
                            {item.body}
                        </Card>
                    </Col>
                ))}
            </Row>
            {!!postsState?.errorMessage && (
                <div className="message">
                    <Alert
                        message="Error"
                        description="Failed show Posts List!"
                        type="error"
                        style={{width: 500}}
                    />
                </div>
            )}
        </div>
    )
}

export default PostsList;