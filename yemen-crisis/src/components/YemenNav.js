import React from "react";
import { Layout, Button, Menu, Typography, Drawer } from "antd";
import InfoCircleOutlined from "@ant-design/icons";
// import "antd/dist/antd.css";
// import "../nav.css";
const { Title, Link } = Typography;
const YemenNav = (props) => {
	// initial state of the drawer is closed
	const [visible, setVisible] = React.useState(false);
	const openDrawer = () => {
		setVisible(true);
	};
	const closeDrawer = () => {
		setVisible(false);
	};
	return (
		<Layout className={"layout"}>
			<header>
				<div className={"logo"} />
				<Menu mode="horizontal">
					<Menu.Item disabled key="0">
						<Title className={"heading"} level={2}>
							Americans for Peace in Yemen
						</Title>
					</Menu.Item>

					<Menu.Item key="1">
						<Button onClick={openDrawer}>Menu</Button>
					</Menu.Item>

					<Menu.Item>
						<Drawer
							title="Tabs"
							placement="right"
							closable={true}
							onClose={closeDrawer}
							visible={visible}
						>
							<Menu mode="vertical">
								<Menu.Item key="overview">
									<Link type="secondary" href="/overview">
										Overview of the War
									</Link>
								</Menu.Item>
								<Menu.Item key="proposal">
									<Link type="danger" href="/proposal">
										Our Proposed Solution
									</Link>
								</Menu.Item>
								<Menu.Item key="sign">
									<Link type="danger" href="/sign">
										Sign The Petition
									</Link>
								</Menu.Item>
								<Menu.Item key="call">
									<Link type="danger" href="/call">
										Call Congress
									</Link>
								</Menu.Item>
								<Menu.Item key="lobby">
									<Link type="danger" href="/lobby">
										How to Lobby
									</Link>
								</Menu.Item>
								<Menu.Item key="donate">
									<Link type="danger" href="/donate">
										Donate
									</Link>
								</Menu.Item>
								<Menu.Item key="literature">
									<Link type="danger" href="/literture">
										Additional Literature
									</Link>
								</Menu.Item>
								<Menu.Item key="about">
									<Link type="danger" href="/about">
										About Us
									</Link>
								</Menu.Item>
							</Menu>
						</Drawer>
					</Menu.Item>
				</Menu>
			</header>
		</Layout>
	);
};

export default YemenNav;
