import LikeButton from "./like-button.js";

      function Header ({title}) {
        console.log(title);
        return <h1>{title ? title : "Default title"}</h1>;
      }

      export default function HomePage () {
        const names = ["React", "Vue", "Angular"];
        // console.log(names);
        

        
        return (
          <div>

            <Header title="Develop. Preview. Ship. " />
            <ul>
              {
                names.map((name) => (
                  <li key={name}>{name}</li>
              ))
              }
            </ul>
            <LikeButton />
          </div>
        );
      }
      

