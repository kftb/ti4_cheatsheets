import { Document, Image, Page, PDFViewer, StyleSheet, View } from '@react-pdf/renderer';
import { uniqueId } from 'lodash';
import { useConfigStore } from '../context/SetupContext';

function FactionCardSheetGenerator({ letter }) {
  // Create styles
  let styles = StyleSheet.create({
    page: {
      flexDirection: 'row',
      backgroundColor: '#fff',
    },
    section: {
      flex: 1,
      alignContent: 'center',
    },
    image: { marginVertical: 3, marginHorizontal: 2, maxWidth: '98%' },
  });

  const strategyCardImage = (
    <Image key={uniqueId()} style={styles.image} src={`/references/sc.jpg`} />
  );
  const pageContent = (
    <>
      <View style={styles.section}>{strategyCardImage}</View>
    </>
  );

  return (
    <Page size={letter === false ? 'a4' : 'letter'} style={styles.page}>
      {pageContent}
    </Page>
  );
}

export default FactionCardSheetGenerator;
