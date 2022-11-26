import React from 'react'
import Link from 'next/link'
import Layout from "../../companents/Layout"
import Navigationn from '../../companents/Navigationn'
import PageHeader from '../../companents/PageHeader'

const Information = () => {
  return (
    <div>
        <Layout>
        <Navigationn>
            <li className="breadcrumb-item">
                <Link href="/mac">
                <a>
                    Information
                </a> 
                </Link>
            </li>       
        </Navigationn>
        <PageHeader header="Information"/>
            <div className="container">
            <div>&nbsp;</div>
            <ul className="information-list">
                <li>
                    <Link href="/information/about">
                        <a>
                        About
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/information/terms-of-sale">
                        <a>
                        Terms of sale
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/information/privacy-policy">
                        <a>
                        Privacy policy
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/information/kredit">
                        <a>
                        Installment
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/information/dostavka-po-baku">
                        <a>
                        Delivery
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/information/servis-alma-store">
                        <a>
                        Alma Service
                        </a>
                    </Link>
                </li>
            </ul>

            </div>
        </Layout>
    </div>
  )
}

export default Information