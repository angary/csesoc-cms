import React, { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import styled from "styled-components";

import { NavbarOpenHandler } from "../components/navbar/types";
import HamburgerMenu from "../components/navbar/HamburgerMenu";

// local
import Navbar from "../components/navbar/Navbar";
import Homepage from "./MiniHomepage";
import Events from "./MiniEvents";
import AboutUs from "./MiniAboutUs";
import HomepageCurve from "../svgs/HomepageCurve";
import RectangleCurve from "../svgs/RectangleCurve";

type CurveContainerProps = {
	offset: number;
};

const PageContainer = styled.div`
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	padding-left: 2rem;
	padding-right: 2rem;
`;

const CurveContainer = styled.div<CurveContainerProps>`
	position: absolute;
	top: ${(props) => props.offset}px;
	right: 0;
	z-index: -1;
`;

const Background = styled.div``;

// const Button = styled.button`
//   background-color:#FFFFFF;
//   color: #3977F8;
//   font-size: 22px;
//   margin-top: 150px;
//   padding: 0.25em 1em;
//   border: 1px solid #3977F8;
//   border-radius: 3px;
//   position: absolute;
//   width: 184px;
//   height: 44px;
// `;

const Home: NextPage = () => {
	const [navbarOpen, setNavbarOpen] = useState(false);
	const handleToggle: NavbarOpenHandler = () => {
		setNavbarOpen(!navbarOpen);
	};

	return (
		<PageContainer> 
			<Head>
				<title>CSESoc</title>
				<meta name="description" content="CSESoc Website Homepage" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main>
				<Background>
					<CurveContainer offset={0}>
						<HomepageCurve width={400} height={1000} />
					</CurveContainer>
					<CurveContainer offset={1200}>
						<RectangleCurve height={2000} dontPreserveAspectRatio />
					</CurveContainer>
				</Background>
				{navbarOpen ? (
					<HamburgerMenu open={navbarOpen} setNavbarOpen={handleToggle} />
				) : (
					<></>
				)}
				<Navbar open={navbarOpen} setNavbarOpen={handleToggle} />
				<a id="homepage">
					<Homepage />
				</a>
				<a id="aboutus">
					<AboutUs />
				</a>
				<a id="events">
					<Events />
				</a>
			</main>
			<footer></footer>
		</PageContainer>
	);
};

export default Home;
