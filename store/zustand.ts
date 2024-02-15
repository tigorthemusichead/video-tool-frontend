import { create } from 'zustand'

type AppStore = {
  videoSrc?: string,
  isLoading: boolean,
  setIsLoading: (isLoading: boolean) => void,
  setVideoSrc: (videoSrc: string) => void
}

export const useAppStore = create<AppStore>((set) => ({
  videoSrc: undefined,
  isLoading: false,
  setIsLoading: (isLoading: boolean) => set((state) => ({isLoading})),
  setVideoSrc: (videoSrc: string) => set((state) => ({videoSrc})),
}))
