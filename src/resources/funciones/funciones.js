export const obtenerNombreYArchivoBase64 = (file) => {
  return Promise((resolve) => {
    const nombreArchivo = file?.name || "";
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const base64Value = e.target.result;
        resolve({
          nombreArchivo: nombreArchivo,
          base64Value: base64Value,
        });
      };
      reader.readAsDataURL(file);
    } else {
      resolve({
        nombreArchivo: nombreArchivo,
        base64Value: null,
      });
    }
  });
};
