import { create } from 'zustand'

type AppStore = {
  videoSrc?: string,
  isLoading: boolean,
  videoCreatedAt?: Date,
  setIsLoading: (isLoading: boolean) => void,
  setVideoSrc: (videoSrc: string) => void,
  setVideoCreatedAt: (videoCreatedAt: Date) => void
}

export const useAppStore = create<AppStore>((set) => ({
  videoSrc: undefined,
  isLoading: false,
  setIsLoading: (isLoading: boolean) => set((state) => ({isLoading})),
  setVideoSrc: (videoSrc: string) => set((state) => ({videoSrc})),
  setVideoCreatedAt: (videoCreatedAt: Date) => set((state) => ({videoCreatedAt}))
}))
