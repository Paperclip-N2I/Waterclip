const Article = () => {
    return (
        <div>
            <div className="container !pt-48 text-primary-dark gap-8">
                <h2 className='text-8xl font-bold'>Article name</h2>
                <p className='max-w-[70%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet ante vel sapien fermentum fermentum. Nullam euismod, augue nec ultrices tempor, libero urna ultricies purus, et tincidunt erat nunc nec mi. Sed auctor, tellus eget luctus varius, nunc erat lacinia magna </p>
            </div>
            <div className="container">
                <img src="https://picsum.photos/800/600" alt="Random" className="w-full max-h-[600px] object-cover mt-6" />
            </div>
            <div className="container text-primary-dark">
                <div className="flex flex-col gap-6 mx-auto max-w-[70%] mt-6 mb-20">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione eius ex nihil, odio aperiam non inventore minima, enim tenetur, aspernatur praesentium dolore quo libero temporibus possimus magnam mollitia in officiis? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione eius ex nihil, odio aperiam non inventore minima, enim tenetur, aspernatur praesentium dolore quo libero temporibus possimus magnam mollitia in officiis? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione eius ex nihil, odio aperiam non inventore minima, enim tenetur, aspernatur praesentium dolore quo libero temporibus possimus magnam mollitia in officiis?</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione eius ex nihil, odio aperiam non inventore minima, enim tenetur, aspernatur praesentium dolore quo libero temporibus possimus magnam mollitia in officiis? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione eius ex nihil, odio aperiam non inventore minima, enim tenetur, aspernatur praesentium dolore quo libero temporibus possimus magnam mollitia in officiis? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione eius ex nihil, odio aperiam non inventore minima, enim tenetur, aspernatur praesentium dolore quo libero temporibus possimus magnam mollitia in officiis?</p>
                    <button className="btn-primary w-fit mx-auto">Retourner à l'activitée</button>
                </div>
            </div>
        </div>
    );
};

export default Article;