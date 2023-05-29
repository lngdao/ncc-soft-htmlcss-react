function PostItem({ img, title, content }) {
  return (
    <div>
      <h1 className="font-bold text-[24px]">{title}</h1>
      <div className="mt-4">
        <img
          className="w-[128px] h-[128px] float-left my-2 mr-4"
          src={img}
          alt=""
        />
        <p>{content}</p>
      </div>
    </div>
  );
}

export default PostItem;
