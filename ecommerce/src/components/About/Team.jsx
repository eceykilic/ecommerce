import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { data } from "../../data/data"

export default function Team() {
  
    const ourTeam = data.about.employees.slice(0, 3).map((item, index) => {
        return (
            <div className="flex flex-col items-center w-[33%]" key={index}>
                <img src={item.src} className="w-full h-full rounded-t" />
                <div className="flex flex-col gap-2 text-center py-3">
                    <h5 className="text-darkText text-base font-bold">{item.fullname}</h5>
                    <h6 className="text-lighterDark text-sm font-bold">{item.department}</h6>
                    <div className="flex gap-4 items-center text-navBlue">
                        <FontAwesomeIcon icon={faFacebook} size="xl" />
                        <FontAwesomeIcon icon={faInstagram} size="xl" />
                        <FontAwesomeIcon icon={faTwitter} size="xl" />
                    </div>
                </div>
            </div>
        )
    })
  
  
  
    return (
        <div className="flex flex-col gap-5 mt-56 mb-36">
        <div className="flex flex-col items-center justify-center gap-6">
            <h2 className="text-darkText text-[40px] font-bold"> Meet Our Team</h2>
            <p className="text-center text-lighterDark text-sm font-normal"> Problems trying to resolve the conflict between <br /> the two major realms of Classical physics: Newtonian mechanics </p>
        </div>
        <div className="flex gap-5 max-w-screen-2xl mx-auto">
            {ourTeam}
        </div>
    </div>
  );
}
