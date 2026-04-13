import TopBar from "../organisms/TopBar";
interface Props {
  children: React.ReactNode;
}
export default function AuthLayout({ children }: Props) {
  return (
    <div>
      <TopBar />
      {children}
    </div>
  );
}
