import { Layout } from "./Layout";
import { DangerToast, InfoToast, SuccessfulToast, WarningToast } from "./Toast";
export const ToastPage = () => {
  return (
    <Layout>
      <WarningToast />
      <div className="iframe-wrapper">
        <iframe
          title="warningToast"
          src="https://carbon.now.sh/embed?bg=rgba%280%2C0%2C0%2C1%29&t=blackboard&wt=none&l=auto&width=680&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Fira+Code&fs=14px&lh=152%25&si=false&es=2x&wm=false&code=export%2520const%2520WarningToast%2520%253D%2520%28props%29%2520%253D%253E%2520%257B%250A%2520%2520const%2520%257B%2520warningToastIconWrapperClass%252C%2520warningIconClass%2520%257D%2520%253D%2520props%253B%250A%2520%2520return%2520%28%250A%2520%2520%2520%2520%253Cdiv%253E%250A%2520%2520%2520%2520%2520%2520%253Cp%250A%2520%2520%2520%2520%2520%2520%2520%2520className%253D%257B%2560warning-toast-icon-wrapper%2520%2524%257BwarningToastIconWrapperClass%257D%2560%257D%250A%2520%2520%2520%2520%2520%2520%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253CImWarning%2520className%253D%257B%2560warning-toast-icon%2520%2524%257BwarningIconClass%257D%2560%257D%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%253C%252Fp%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%29%253B%250A%257D%253B"
          style={{
            width: "inherit",
            height: "304px",
            border: "0",
            transform: "scale(1)",
            overflow: "hidden",
          }}
          sandbox="allow-scripts allow-same-origin"
        ></iframe>
      </div>
      <InfoToast />
      <div className="iframe-wrapper">
        <iframe
          title="info-toast"
          src="https://carbon.now.sh/embed?bg=rgba%280%2C0%2C0%2C1%29&t=blackboard&wt=none&l=auto&width=680&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Fira+Code&fs=14px&lh=152%25&si=false&es=2x&wm=false&code=export%2520const%2520InfoToast%2520%253D%2520%28props%29%2520%253D%253E%2520%257B%250A%2520%2520const%2520%257B%2520infoToastIconWrapperClass%252C%2520infoToastIconClass%2520%257D%2520%253D%2520props%253B%250A%2520%2520return%2520%28%250A%2520%2520%2520%2520%253Cdiv%253E%250A%2520%2520%2520%2520%2520%2520%253Cp%2520className%253D%257B%2560info-toast-icon-wrapper%2520%2524%257BinfoToastIconWrapperClass%257D%2560%257D%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253CBsInfoCircle%2520className%253D%257B%2560info-toast-icon%2520%2524%257BinfoToastIconClass%257D%2560%257D%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%253C%252Fp%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%29%253B%250A%257D%253B%250A%257D%253B"
          style={{
            width: "inherit",
            height: "316px",
            border: "0",
            transform: "scale(1)",
            overflow: "hidden",
          }}
          sandbox="allow-scripts allow-same-origin"
        ></iframe>
      </div>
      <DangerToast />
      <div className="iframe-wrapper">
        <iframe
          title="danger-toast"
          src="https://carbon.now.sh/embed?bg=rgba%280%2C0%2C0%2C1%29&t=blackboard&wt=none&l=auto&width=680&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Fira+Code&fs=14px&lh=152%25&si=false&es=2x&wm=false&code=export%2520const%2520DangerToast%2520%253D%2520%28props%29%2520%253D%253E%2520%257B%250A%2520%2520const%2520%257B%2520dangerToastIconWrapperClass%252C%2520dangerToastIconClass%2520%257D%2520%253D%2520props%253B%250A%2520%2520return%2520%28%250A%2520%2520%2520%2520%253Cdiv%253E%250A%2520%2520%2520%2520%2520%2520%253Cp%2520className%253D%257B%2560danger-toast-icon-wrapper%2520%2524%257BdangerToastIconWrapperClass%257D%2560%257D%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253CCgDanger%2520className%253D%257B%2560danger-toast-icon%2520%2524%257BdangerToastIconClass%257D%2560%257D%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%253C%252Fp%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%29%253B%250A%257D%253B"
          style={{
            width: "inherit",
            height: "316px",
            border: "0",
            transform: "scale(1)",
            overflow: "hidden",
          }}
          sandbox="allow-scripts allow-same-origin"
        ></iframe>
      </div>
      <SuccessfulToast />
      <div className="iframe-wrapper">
        <iframe
          title="successful-toast"
          src="https://carbon.now.sh/embed?bg=rgba%280%2C0%2C0%2C1%29&t=blackboard&wt=none&l=auto&width=680&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Fira+Code&fs=14px&lh=152%25&si=false&es=2x&wm=false&code=export%2520const%2520SuccessfulToast%2520%253D%2520%28props%29%2520%253D%253E%2520%257B%250A%2520%2520const%2520%257B%2520successfulToastIconWrapperClass%252C%2520successfulToastIconClass%2520%257D%2520%253D%2520props%253B%250A%2520%2520return%2520%28%250A%2520%2520%2520%2520%253Cdiv%253E%250A%2520%2520%2520%2520%2520%2520%253Cp%250A%2520%2520%2520%2520%2520%2520%2520%2520className%253D%257B%2560successful-toast-icon-wrapper%2520%2524%257BsuccessfulToastIconWrapperClass%257D%2560%257D%250A%2520%2520%2520%2520%2520%2520%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253CBiCheck%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520className%253D%257B%2560successful-toast-icon%2520%2524%257BsuccessfulToastIconClass%257D%2560%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%253C%252Fp%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%29%253B%250A%257D%253B"
          style={{
            width: "inherit",
            height: "316px",
            border: "0",
            transform: "scale(1)",
            overflow: "hidden",
          }}
          sandbox="allow-scripts allow-same-origin"
        ></iframe>
      </div>
    </Layout>
  );
};
