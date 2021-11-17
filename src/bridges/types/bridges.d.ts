import { electronBridge, storeBridge, OBSBridge } from "../main";

declare global {
  interface Window {
    electron: typeof electronBridge;
    store: typeof storeBridge;
    obs: typeof OBSBridge;
  }
}
