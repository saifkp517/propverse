import React from "react";
import {
    StackedCarousel,
    ResponsiveContainer,
} from "react-stacked-center-carousel";
import Fab from '@mui/material/Fab';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export const data = [
    {

        title: "Interstellar",
    },
    {

        title: "Inception",
    },
    {

        title: "Blade Runner 2049",
    },
    {

        title: "Iron Man 3",
    },
    {

        title: "Venom",
    },
    {

        title: "Steins Gate",
    },
    {

        title: "One Punch Man",
    },
    {

        title: "A Silent Voice",
    },
    {

        title: "Demon Slayer",
    },
    {

        title: "Attack On Titan",
    },
];

export default function ResponsiveCarousel(props) {
    const ref = React.useRef();

    return (
        <div className="relative w-full border border-transparent h-screen p-5 mx-auto my-20">
            <ResponsiveContainer
                carouselRef={ref}
                render={(parentWidth, carouselRef) => {
                    let currentVisibleSlide = 3;
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
                            maxVisibleSlide={5}
                            useGrabCursor
                        />
                    );
                }}
            />
            <>
                <Fab
                    style={{ position: "absolute", top: "40%", left: 10, zIndex: 10 }}
                    size="small"
                    color="primary"
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
            </>
        </div>
    );
}

const Card = () => {
    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 overflow-hidden flex flex-col">
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
                minHeight: '70vh',
                marginLeft: '100px',
                marginRight: '100px',
            }}
            className="my-slide-component w-full rounded-lg bg-gray-100 border border-gray-400 select-none"
        >
            <h1 className=" font-roboto font-bold text-3xl p-10">{data[dataIndex].title}</h1>
            <div className="grid grid-cols-3 mx-20">
                <div className=""><Card /></div>
                <div className=""><Card /></div>
                <div className=""><Card /></div>

            </div>
        </div>
    );
});
