import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React, { useMemo, useState, useEffect } from "react";
import ConferenceTable from '../components/ConferenceTable'
import Header from '../components/Header'

export default function Home() {
  return (
    <div>
      <Header/>
      <h1 className="text-3xl font-bold underline">Quarantine Conference</h1>
      <ConferenceTable />
    </div>
  )
}
