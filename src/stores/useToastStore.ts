import { create } from 'zustand';

export interface ToastState {
  toastText: string;
  showToast: boolean;
  openToast: (text: string) => void;
  closeToast: () => void;

  showLinkToast: boolean;
  openLinkToast: (text: string) => void;
  closeLinkToast: () => void;
}

export const useToastStore = create<ToastState>((set) => ({
  // 토스트
  toastText: '',
  showToast: false,
  openToast: (text: string) => {
    set({ toastText: text, showToast: true });
  },
  closeToast: () => set({ showToast: false }),

  // 링크 토스트
  showLinkToast: false,
  openLinkToast: (text: string) => {
    set({ toastText: text, showLinkToast: true });
  },
  closeLinkToast: () => set({ showLinkToast: false }),
}));
