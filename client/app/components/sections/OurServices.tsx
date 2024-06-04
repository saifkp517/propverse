import React from "react";
import {
    StackedCarousel,
    ResponsiveContainer,
} from "react-stacked-center-carousel";
import Image from "next/image";
import Fab from '@mui/material/Fab';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const theme = createTheme({
    components: {
        MuiFab: {
            styleOverrides: {
                root: {
                    backgroundColor: 'black',
                    color: 'white',
                    '&:hover': {
                        backgroundColor: 'black',
                    },
                },
            },
        },
    },
});

export const data = [
    {

        title: "Why Fractional Ownership?",
        points: [
            "Introduction to fractional Ownership",
            "Reasons for Choosing fractional Ownership",
            "Legal & Regulatory Aspects of fractional ownership",
            "Types of Fractional Ownership",
        ],
        logo: "/cubes.png"
    },
    {

        title: "Why to Invest?",
        points: [
            "Wealth diversification through fractional ownership",
            "Access to high-value assets with low capital investment",
            "Enjoy financial returns of Premium Real Estate",
            "Access to Nation Wide micro-markets"
        ],
        logo: "/whytoinvest.png"
    },
    {

        title: "Why PropertyVerse?",
        points: [
            "PropertyVerse is a one stop destination for all your fractional ownership needs",
            "Streamlined access to diverse fractional ownership options",
            "Credit Risk Analysis Report of Every Project",
            "Educational Content & Guides"
        ],
        logo: "/whytoinvest.png"
    },



];

export default function ResponsiveCarousel(props: any) {
    const ref: any = React.useRef();

    return (
        <div className="relative w-full border border-transparent p-4 md:p-8 lg:p-16 xl:p-20 mb-10 mx-auto bg-blue-50">
            <div className="my-20 text-gray-800">
                <h1 className="font-roboto text-2xl md:text-4xl lg:text-5xl text-center font-semibold mb-4">Diversifed Investment Opportunities</h1>
                <p className="font-roboto text-sm md:text-md lg:text-lg text-center">Explore a diverse range of fractional ownership opportunities in premium real estate</p>
            </div>
            <ResponsiveContainer
                carouselRef={ref}
                render={(parentWidth, carouselRef) => {
                    let currentVisibleSlide = 1;
                    if (parentWidth <= 1440) currentVisibleSlide = 3;
                    if (parentWidth <= 1080) currentVisibleSlide = 1;
                    return (
                        <StackedCarousel
                            ref={carouselRef}
                            slideComponent={Display}
                            slideWidth={parentWidth < 800 ? parentWidth - 40 : parentWidth}
                            carouselWidth={parentWidth}
                            data={data}
                            currentVisibleSlide={currentVisibleSlide}
                            maxVisibleSlide={3}
                            useGrabCursor
                        />
                    );
                }}
            />
            <>
                <ThemeProvider theme={theme}>
                    <Fab
                        style={{ position: "absolute", top: "40%", left: 10, zIndex: 10 }}
                        size="small"
                        color="primary"
                        className="p-auto"
                        onClick={() => {
                            ref.current?.goBack();
                        }}
                    >
                        <ArrowBackIosIcon />
                    </Fab>
                    <Fab
                        style={{ position: "absolute", top: "40%", right: 10, zIndex: 10 }}
                        size="small"
                        color="primary"
                        className="m-auto"
                        onClick={() => {
                            ref.current?.goNext(6);
                        }}
                    >
                        <ArrowForwardIosIcon />
                    </Fab>
                </ThemeProvider>


            </>
        </div>
    );
}

const Card = () => {
    return (
        <div className="max-w-sm bg-white border border-gray rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 overflow-hidden flex flex-col">
            <a href="#">
                <img className="w-full h-20 object-cover" src="https://via.placeholder.com/300" alt="Sample Image" />
            </a>
            <div className="p-5 bg-white dark:bg-gray-800 flex-1 transition-all duration-300 hover:h-2/5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Noteworthy technology acquisitions 2021
                    </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                </p>
                <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Read more
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                </a>
            </div>
        </div>
    );
};


export const Display = React.memo(function (props) {
    const { data, dataIndex } = props;
    const { cover } = data[dataIndex];
    return (
        <div
            style={{
                height: '50vh',
                marginLeft: '30px',
                marginRight: '30px',
            }}
            className="relative my-slide-component w-full rounded-lg bg-white select-none py-4 md:py-6 lg:py-10 px-6 md:px-24 lg:px-32 "
        >

            <h1 className="font-roboto font-bold text-3xl text-center text-blue-600 mb-6">{data[dataIndex].title}</h1>
            <br />
            <ul className="list-['-_'] list-inside text-left space-y-4 text-lg text-gray-700">
                {data[dataIndex].points.map((point, index) => (
                    <li key={index} className="pl-4 font-semibold hover:underline hover:text-blue-700 cursor-pointer leading-loose">{point}</li>
                ))}
            </ul>
            <div className="absolute bottom-0 right-0 lg:right-1 my-10 lg:mx-20">
                <Image alt="cubes" width={100} height={100} src={data[dataIndex].logo} />
            </div>
        </div>
    );
});
