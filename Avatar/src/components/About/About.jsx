export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            React development is carried out by passionate developers
                        </h2>
                        <p className="mt-6 text-gray-600">
                        Hello I'm Avtar, a passionate React developer who enjoys making interesting online apps.
                        As a self-taught web developer, I was drawn to React because of its ease of use and adaptability.
                        </p>
                        <p className="mt-4 text-gray-600">
                        With a strong foundation in web development and expertise in React, JavaScript, HTML5, CSS3, and other modern technologies, we are committed to delivering high-quality projects that exceed expectations.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}