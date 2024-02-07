import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

export default function Index() {
    return (
        <div className="bg-black">
            <HorizontalScrollCarousel />
        </div>
    );
};

const HorizontalScrollCarousel = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "95%"]);

    return (
        <section ref={targetRef} className="relative h-[300vh] bg-neutral-900">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <motion.div style={{ x }} className="flex gap-4">
                    {cards.map((card) => {
                        return <Card card={card} key={card.id} />;
                    })}
                </motion.div>
            </div>
        </section>
    );
};

const Card = ({ card }) => {
    return (
        <div
            key={card.id}
            className="group rounded-xl relative h-[400px] w-[300px] md:h-[550px] md:w-[450px] overflow-hidden bg-neutral-200"
        >
            <div
                style={{
                    backgroundImage: `url(${card.url})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
                className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
            ></div>
            <motion.div className="absolute w-[100%] inset-0 z-10 grid justify-center place-content-end">
                <p className="bg-gradient-to-t from-black to-black/80 p-8 text-4xl font-black uppercase text-white backdrop-blur-lg">
                    <span className="">{card.title}</span>
                </p>
            </motion.div>
        </div>
    );
};

const cards = [
    {
        url: "/images/static/background-main.jpg",
        title: "Title 1",
        id: 1,
    },
    {
        url: "/images/books/2.jpg",
        title: "Title 2",
        id: 2,
    },
    {
        url: "/images/books/3.jpg",
        title: "آیا شما فریب خورده‌اید؟",
        id: 3,
    },
    {
        url: "/images/books/4.jpg",
        title: "Title 4",
        id: 4,
    },
    {
        url: "/images/books/5.jpg",
        title: "Title 5",
        id: 5,
    },
    {
        url: "/images/books/6.jpg",
        title: "Title 6",
        id: 6,
    },
    {
        url: "/images/books/7.jpg",
        title: "Title 7",
        id: 7,
    },
    {
        url: "/images/books/7.jpg",
        title: "Title 7",
        id: 7,
    },
];