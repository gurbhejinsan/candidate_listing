import { Card } from "./card";

const Loader = () => {
  return (
    <Card className="h-5/6 w-full absolute   flex-center  ">
      <div className="newtons-cradle">
        <div className="newtons-cradle__dot"></div>
        <div className="newtons-cradle__dot"></div>
        <div className="newtons-cradle__dot"></div>
        <div className="newtons-cradle__dot"></div>
      </div>
    </Card>
  );
};

export default Loader;
