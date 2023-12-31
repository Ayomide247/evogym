import Logo from "@/assets/Logo.png";

type Props = {}

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16 ">
        <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
            <div className="mt-16 basis-1/2 md:mt-0">
              <img src={Logo} alt="logo" />  
              <p className="my-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur tempore corporis delectus expedita temporibus voluptas totam necessitatibus incidunt nulla, autem quam sint natus maiores sit commodi fuga minus repellendus veniam.</p>
              <p>© Evogym All Right Reserved.</p>
            </div>
            <div className="mt-16 basis-1/4 md:mt-0 ">
                <h4 className="font-bold">LINKS</h4>
                <p className="mt-5">Massa orci senectus</p>
                <p className="mt-5">Et gravida id et etimpa</p>
                <p>Ullamcopper vivanus</p>
            </div>
            <div className="mt-16 basis-1/4 md:mt-0 ">
                <h4 className="font-bold">Contact Us</h4>
                <p className="mt-5">Massa orci senectus</p>
                <p className="mt-5">+23480677275</p>
               
            </div>
        </div>
    </footer>
  )
}

export default Footer