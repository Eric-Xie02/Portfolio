export default function InitialsLogo({
  backgroundColor = "#fbb052", // Default background color (orange-ish)
  textColor = "white", // Default text color (white)
  initials = "EX", // Default initials
  size = "50px", // Default size of the icon
}) {
  return <div className="initials-logo">{initials}</div>;
}
