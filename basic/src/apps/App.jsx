import "./App.css";
import Avata from "../components/Avata";
import Profile from "../components/Profile";

function App() {
  // 리턴시 반드시 하나의 태그만 출력한다

  return (
    <div className="flex_box">
      <Profile
        img="https://images.unsplash.com/photo-1698522146643-48af8d585b10?auto=format&fit=crop&q=80&w=2072&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        name="Dog kim"
        position="프론트엔드 개발자"
        isNew={true}></Profile>
      <Profile
        img="https://images.unsplash.com/photo-1695902173528-0b15104c4554?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D"
        name="Robot jung"
        position="DB 엔지니어"></Profile>
      <Profile
        img="https://plus.unsplash.com/premium_photo-1696528052525-2eeec838b800?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4N3x8fGVufDB8fHx8fA%3D%3D"
        name="Song"
        position="백엔드 개발자"></Profile>
      <Avata
        img="https://images.unsplash.com/photo-1698522146643-48af8d585b10?auto=format&fit=crop&q=80&w=2072&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        name="Dog kim"
        position="프론트엔드 개발자"
        isNew={true}></Avata>
    </div>
  );
}

export default App;

/* 
create react app (약어 : cra)

1.프로젝트 yarn start
2. public indexhtml 찾음 body안에 root 로
3. index.js를 찾음 index.js에서 reactDom에서 실제 root생성 
*/
