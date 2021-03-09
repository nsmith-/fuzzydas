import './App.css';
import Autocomplete from "./Autocomplete";

function App() {
  return (
    <div className="App">
      <header className="App Title">
        Fuzzy Dataset Search
      </header>
      <div className="App SearchBar">
        <div className="Sep">/</div>
        <Autocomplete name="primary" options={["GluGluSpin0ToGammaGamma_W_1p4_M_750_TuneCP2_13TeV_pythia8","VBFToRadionToHHTo4B_M-850_narrow_13TeV-madgraph","VBF_LFV_HToMuTau_M150_13TeV_powheg_pythia8","GluGluSpin0ToGammaGamma_W_5p6_M_3000_TuneCP2_13TeV_pythia8","HWminusJ_HToWW_M120_13TeV_powheg_pythia8_TuneCP5","PythiaChargedResonance_WGToJJG_M2400_width5","PythiaChargedResonance_WGToLNuG_M250_width0p01","BprimeTToHB_M-1400_RH_TuneCUETP8M1_13TeV-madgraph-pythia8","ZprimeToZhToZhadhbb_narrow_M-3500_13TeV-madgraph","gluinoGMSB_M2900_ctau1000p0_TuneCP2_13TeV_pythia8"]} />
        <div className="Sep">/</div>
        <Autocomplete name="conditions" options={["RunIIFall17NanoAODv6-PU2017_12Apr2018_Nano25Oct2019_102X_mc2017_realistic_v7-v1","RunIIFall17NanoAODv6-PU2017_12Apr2018_Nano25Oct2019_102X_mc2017_realistic_v7-v2","RunIISummer16NanoAODv6-PUMoriond17_Nano25Oct2019_102X_mcRun2_asymptotic_v7-v1","RunIIFall17NanoAODv6-PU2017_12Apr2018_Nano25Oct2019_tauDecays_102X_mc2017_realistic_v7-v1","RunIISummer16NanoAODv6-PUMoriond17_Nano25Oct2019_102X_mcRun2_asymptotic_v7_ext1-v1","RunIIAutumn18NanoAODv6-PUFall18Fast_Nano25Oct2019_102X_upgrade2018_realistic_v20-v1","RunIIFall17NanoAODv6-PU2017_12Apr2018_Nano25Oct2019_102X_mc2017_realistic_v7_ext1-v1","RunIIFall17NanoAODv6-PUFall17Fast_Nano25Oct2019_102X_mc2017_realistic_v7-v1","RunIIAutumn18NanoAODv4-Nano14Dec2018_102X_upgrade2018_realistic_v16-v1","RunIIFall17NanoAODv6-PU2017_12Apr2018_Nano25Oct2019_new_pmx_102X_mc2017_realistic_v7-v2"]} />
        <div className="Sep">/</div>
        <Autocomplete name="datatier" options={["NANOAOD", "NANOAODSIM", "MINIAOD"]} default="NANOAODSIM" />
      </div>
    </div>
  );
}

export default App;
