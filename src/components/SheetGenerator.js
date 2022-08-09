import React from 'react';
import { Page, View, Document, StyleSheet, PDFViewer, Image } from '@react-pdf/renderer';
import { uniqueId } from 'lodash';
import { useSetupStore } from '../context/SetupContext';

function SheetGenerator() {
  // load selected factions loaded in from previous page
  // TODO: Consider parsing them into the url instead
  const selectedFactions = useSetupStore((state) => state.factions);

  // Create styles
  const styles = StyleSheet.create({
    page: {
      flexDirection: 'row',
      backgroundColor: '#fff',
    },
    section: {
      flex: 1,

      alignContent: 'center',
    },
    image: {
      marginVertical: 2,
      marginHorizontal: 5,
      maxWidth: '95%',
    },
  });

  const factions = selectedFactions;
  const factionsLeft = factions.slice(0, 4);
  const factionsRight = factions.slice(4);

  const factionViewLeftImages = factionsLeft.map((fl) => (
    <Image key={uniqueId()} style={styles.image} src={`/factions/cards/${fl}.png`} />
  ));

  const factionViewRightImages = factionsRight.map((fr) => (
    <Image key={uniqueId()} style={styles.image} src={`/factions/cards/${fr}.png`} />
  ));

  const pdf = (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>{factionViewLeftImages}</View>
        <View style={styles.section}>{factionViewRightImages}</View>
      </Page>
    </Document>
  );

  return (
    <>
      <div className="w-full">
        <PDFViewer width="100%" height="1500px">
          {pdf}
        </PDFViewer>
      </div>
    </>
  );
}

export default SheetGenerator;
