import logoNCC from '../../assets/logoNCC.png';
import PostItem from '../PostItem';
import PostImg1 from '../../assets/post_1.png';
import PostImg2 from '../../assets/post_2.png';
import PostImg3 from '../../assets/post_3.png';

const imgs = [PostImg1, PostImg2, PostImg3];
let mockData = Array(3).fill({
  title: 'Lorem ipsum dolor sit amet',
  content:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis.',
});
mockData = mockData.map((item, index) => ({ ...item, img: imgs[index] }));

function PageContent() {
  return (
    <div className="flex flex-col items-center pt-24 sm:pt-7 pb-10 px-7 sm:px-10 md:px-12 lg:px-32">
      <img style={{ width: 310 }} src={logoNCC} alt="" />
      <div className="flex flex-col items-center mt-7 bg-[#EFEFEF] py-[38px] px-20 sm:px-24 md:px-28 lg:px-32">
        <h2 className="font-bold text-[18px] text-center">
          Lorem ipsum dolor sit asmet?
        </h2>
        <span className="text-[16px] mt-[18px] text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique
          consequat placerat. Vestibulum auctor pellentesque sem, eu posuere
          erat hendrerit quis. Maecenas vel consequat turpis. Nam facilisis,
          ligula in mattis sodales, augue justo tristique nulla, sed lacinia
          ante eros ut mi. Morbi vitae diam augue. Aliquam vel mauris a nibh
          auctor commodo. Praesent et nisi eu justo eleifend convallis. Quisque
          suscipit maximus vestibulum. Phasellus congue mollis orci, sit amet
          luctus augue tristique eu. Donec vulputate odio neque, sed semper
          turpis pellentesque a.
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-[40px]">
        {mockData.map((item, index) => (
          <PostItem
            key={index}
            img={item.img}
            title={item.title}
            content={item.content}
          />
        ))}
      </div>
    </div>
  );
}

export default PageContent;
