import { pcBuildParts, pcCleaning, pcRepair, pcUpgrade, windowsInstallation } from "../../../assets/images";

const Services = () => {
    return(
        <section className="sectionServices" id="sectionServices">
            <p className="sectionTitle">SERVICES</p>
            <div className="columnList">
                <div className="servicesPreview">
                    <img 
                        className="galleryPreivewItemImage"
                        src={pcBuildParts}
                        alt="PC Build" 
                    />
                    <div className="servicePreviewDescription">
                        <p>Custom PC build</p>
                        <p>$50</p>
                    </div>
                </div>

                <div className="servicesPreview">
                    <img 
                        className="galleryPreivewItemImage"
                        src={pcCleaning}
                        alt="PC Cleaning" 
                    />
                    <div className="servicePreviewDescription">
                        <p>Full Cleaning w/ Thermal Paste replacement</p>
                        <p>$50</p>
                    </div>
                </div>

                <div className="servicesPreview">
                    <img 
                        className="galleryPreivewItemImage"
                        src={windowsInstallation}
                        alt="Windows Installation" 
                    />
                    <div className="servicePreviewDescription">
                        <p>Windows Installation (Pre-Actiavted)</p>
                        <p>$50</p>
                    </div>
                </div>

                <div className="servicesPreview">
                    <img 
                        className="galleryPreivewItemImage"
                        src={pcUpgrade}
                        alt="PC Upgrade" 
                    />
                    <div className="servicePreviewDescription">
                        <p>Parts Upgrade/Replacement</p>
                        <p>$50</p>
                    </div>
                </div>

                <div className="servicesPreview">
                    <img 
                        className="galleryPreivewItemImage"
                        src={pcRepair}
                        alt="Repair and Troubleshooting" 
                    />
                    <div className="servicePreviewDescription">
                        <p>Repair & Troubleshooting</p>
                        <p>$50</p>
                    </div>
                </div>
                
            </div>
            <p>*Home service will be $50 more on top of any services</p>
        </section>
    )
}

export default Services;