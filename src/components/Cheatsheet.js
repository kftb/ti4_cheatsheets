import React from 'react';
import { Page, Text, View, Document, StyleSheet, PDFViewer, Image } from '@react-pdf/renderer';
import { uniqueId } from 'lodash';

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

const factions = ['arborec', 'nomad', 'winnu', 'argentflight', 'empyrean', 'federationofsol'];

const factionsLeft = factions.slice(0, 4);
const factionsRight = factions.slice(4);

const factionViewLeftImages = factionsLeft.map((fl) => (
  <Image key={uniqueId()} style={styles.image} src={`/factions/${fl}.png`} />
));

const factionViewRightImages = factionsRight.map((fl) => (
  <Image key={uniqueId()} style={styles.image} src={`/factions/${fl}.png`} />
));

const pdf = (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>{factionViewLeftImages}</View>
      <View style={styles.section}>{factionViewRightImages}</View>
    </Page>
  </Document>
);

function CheatSheet() {
  return (
    <PDFViewer width="1000" height="1500">
      {pdf}
    </PDFViewer>
  );
}

export default CheatSheet;
