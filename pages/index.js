import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React, { useMemo, useState, useEffect } from "react";
import ConferenceTable from '../components/ConferenceTable'

export default function Home() {
  return (
    <div>
      <h1>Hello World</h1>
      <ConferenceTable />
    </div>
  )
}
