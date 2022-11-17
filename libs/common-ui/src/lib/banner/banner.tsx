export type BannerProps = {
  text: string;
}

export const Banner = ({text}: BannerProps) => {
  return <header>{text}</header>;
}

export default Banner;
