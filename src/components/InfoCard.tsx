import type { IPData } from "../types/ip";

export default function InfoCard({data}: {data:IPData}){


    return (
        <section className="info-card">
            <div>
                <h4>IP ADDRESS</h4>
                <p>{data.ip}</p>
            </div>
            <div>
                <h4>LOCATION</h4>
                <p>{data.location.city},{data.location.region}</p>
            </div>
            <div>
                 <h4>TIMEZONE</h4>
                 <p>UTC {data.location.timezone}</p>
            </div>

            <div>
        <h4>ISP</h4>
        <p>{data.isp}</p>
      </div>
        </section>
    )

}