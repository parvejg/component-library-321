import { Layout } from "./Layout";
import { DangerToast, InfoToast, SuccessfulToast, WarningToast } from "./Toast";
export const ToastPage = () => {
  return (
    <Layout>
      <WarningToast />
      <div></div>
      <InfoToast />
      <div></div>
      <DangerToast />
      <div></div>
      <SuccessfulToast/>
      <div></div>
    </Layout>
  );
};
