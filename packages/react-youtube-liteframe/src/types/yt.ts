/**
 * Props for the Youtube component.
 *
 * @remarks
 * These props control how the lightweight YouTube embed behaves.
 *
 * @example
 * Basic usage:
 * ```tsx
 * <Youtube videoID="dQw4w9WgXcQ" />
 * ```
 *
 * @example
 * With custom options:
 * ```tsx
 * <Youtube videoID="dQw4w9WgXcQ" ytImpression={false} />
 * ```
 */
export interface YoutubeProps {
  /**
   * The YouTube video ID to embed.
   *
   * @example
   * `dQw4w9WgXcQ`
   */
  videoID: string;

  /**
   * The YouTube video title.
   *
   *
   *
   */
  videoTitle?: string;

  /**
   * Provide custom styles to the root container
   */
  className?: string;

  /**
   * Whether the video is a YouTube shorts.
   *
   * @default false
   */
  short?: boolean;

  /**
   * Whether to show a "Watch on YouTube" impression text.
   *
   * @default true
   */
  ytImpression?: boolean;

  /**
   * Whether to lazy/eager load the thumbnail.
   *
   * @default "lazy"
   */
  imageLoading?: "lazy" | "eager";

  /**
   * Use www.youtube-nocookie.com instead of www.youtube.com for Privacy-Enhanced Mode.
   *
   * @default false
   */
  noCookie?: boolean;

  /**
   * Establish connection to the resources for best performance .
   *
   * @default true
   */
  preconnect?: boolean;
}

/**
 * A lightweight, accessible, lazy-loaded YouTube embed for React.
 *
 * @param props - The props to configure the YouTube embed. See {@link YoutubeProps}.
 * @returns The YouTube embed React component.
 *
 * @example
 * ```tsx
 * <Youtube videoID="abc123" ytImpression={false} />
 * ```
 */
