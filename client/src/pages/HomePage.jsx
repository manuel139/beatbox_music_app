import React from "react";
import HomeHero from "../components/HomeHero";
import SmallSection from "../components/SmallSection";
import TopCharts from "../components/TopCharts";
import Categories from "../components/Categories";
import Search from "../components/Search";
import { Grid, GridItem } from "@chakra-ui/react";
import Artistes from "../components/Artistes";
export const songs = [
	{
		id: 1,
		title: "A Better Time",
		artistes: ["Davido"],
		coverImage: "/cover.jpg",
	},
	{
		id: 2,
		title: "I Decided",
		artistes: ["Big Sean"],
		coverImage: "/decided_cover.jpg",
	},
	{
		id: 3,
		title: "A Better Time",
		artistes: ["Davido"],
		coverImage: "/cover.jpg",
	},
	{
		id: 4,
		title: "I Decided",
		artistes: ["Big Sean"],
		coverImage: "/decided_cover.jpg",
	},
	{
		id: 5,
		title: "A Better Time",
		artistes: ["Davido"],
		coverImage: "/cover.jpg",
	},
	{
		id: 6,
		title: "I Decided",
		artistes: ["Big Sean"],
		coverImage: "/decided_cover.jpg",
	},
	{
		id: 7,
		title: "A Better Time",
		artistes: ["Davido"],
		coverImage: "/cover.jpg",
	},
];

const HomePage = () => {
	return (
		<Grid templateColumns="repeat(8, 1fr)" minH="100vh">
			<GridItem colSpan={5} p={4}>
				<Search />
				<HomeHero />
				<SmallSection title="New Releases" endpoint="/songs/releases" />
				<Artistes />
				<SmallSection title="Popular Around You" endpoint="/songs/top" />
			</GridItem>
			<GridItem colSpan={3} p={4}>
				<TopCharts />
				<Categories />
			</GridItem>
		</Grid>
	);
};

export default HomePage;
