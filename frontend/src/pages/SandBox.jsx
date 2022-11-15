import Gallery from "@components/Gallery";

export default function SandBox() {
  const sandboxStyles = {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "center",
    alignItems: "center",
    padding: "1rem",
  };
  return (
    <>
      <p>Composants développés en isolation</p>
      <p>
        Aucun lien du site officiel ne mène à cette page, elle n'est accessible
        que via son url
      </p>

      <div style={sandboxStyles}>
        <Gallery />
      </div>
    </>
  );
}
