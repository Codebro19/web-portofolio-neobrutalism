import { colors } from "../styles/neobrutalism";

export function Footer() {
  return (
    <div
      className="p-4 text-center text-xl"
      style={{
        backgroundColor: colors.accent,
        borderTop: `2px solid ${colors.dark}`,
      }}
    >
      <p>&copy; {new Date().getFullYear()} CodeBro. All rights reserved.</p>
    </div>
  );
}
