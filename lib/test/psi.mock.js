module.exports = {
    psiMock: {
        "lighthouseResult": {
            "audits": {
                "largest-contentful-paint": {
                    "id": "largest-contentful-paint",
                    "title": "Largest Contentful Paint",
                    "description": "Largest Contentful Paint marks the time at which the largest text or image is painted. [Learn more](https://web.dev/lighthouse-largest-contentful-paint/)",
                    "score": 1,
                    "scoreDisplayMode": "numeric",
                    "displayValue": "0.4 s",
                    "numericValue": 390,
                    "numericUnit": "millisecond"
                },
                "speed-index": {
                    "id": "speed-index",
                    "title": "Speed Index",
                    "description": "Speed Index shows how quickly the contents of a page are visibly populated. [Learn more](https://web.dev/speed-index/).",
                    "score": 0.11,
                    "scoreDisplayMode": "numeric",
                    "displayValue": "4.0 s",
                    "numericValue": 3951.8827971517835,
                    "numericUnit": "millisecond"
                },
                "total-blocking-time": {
                    "id": "total-blocking-time",
                    "title": "Total Blocking Time",
                    "description": "Sum of all time periods between FCP and Time to Interactive, when task length exceeded 50ms, expressed in milliseconds. [Learn more](https://web.dev/lighthouse-total-blocking-time/).",
                    "score": 1,
                    "scoreDisplayMode": "numeric",
                    "displayValue": "0 ms",
                    "numericValue": 0,
                    "numericUnit": "millisecond"
                },
                "cumulative-layout-shift": {
                    "id": "cumulative-layout-shift",
                    "title": "Cumulative Layout Shift",
                    "description": "Cumulative Layout Shift measures the movement of visible elements within the viewport. [Learn more](https://web.dev/cls/).",
                    "score": 0.99,
                    "scoreDisplayMode": "numeric",
                    "displayValue": "0.043",
                    "details": {
                        "items": [
                            {
                                "cumulativeLayoutShiftMainFrame": 0.042975177304964543,
                                "totalCumulativeLayoutShift": 0.042975177304964543
                            }
                        ],
                        "type": "debugdata"
                    },
                    "numericValue": 0.042975177304964543,
                    "numericUnit": "unitless"
                },
                "first-contentful-paint": {
                    "id": "first-contentful-paint",
                    "title": "First Contentful Paint",
                    "description": "First Contentful Paint marks the time at which the first text or image is painted. [Learn more](https://web.dev/first-contentful-paint/).",
                    "score": 1,
                    "scoreDisplayMode": "numeric",
                    "displayValue": "0.3 s",
                    "numericValue": 274,
                    "numericUnit": "millisecond"
                }
            },
            "categories": {
                "performance": {
                    "id": "performance",
                    "title": "Performance",
                    "score": 0.91,
                    "auditRefs": [
                        {
                            "id": "first-contentful-paint",
                            "weight": 10,
                            "group": "metrics",
                            "acronym": "FCP",
                            "relevantAudits": [
                                "server-response-time",
                                "render-blocking-resources",
                                "redirects",
                                "critical-request-chains",
                                "uses-text-compression",
                                "uses-rel-preconnect",
                                "uses-rel-preload",
                                "font-display",
                                "unminified-javascript",
                                "unminified-css",
                                "unused-css-rules"
                            ]
                        },
                        {
                            "id": "speed-index",
                            "weight": 10,
                            "group": "metrics",
                            "acronym": "SI"
                        },
                        {
                            "id": "largest-contentful-paint",
                            "weight": 25,
                            "group": "metrics",
                            "acronym": "LCP",
                            "relevantAudits": [
                                "server-response-time",
                                "render-blocking-resources",
                                "redirects",
                                "critical-request-chains",
                                "uses-text-compression",
                                "uses-rel-preconnect",
                                "uses-rel-preload",
                                "font-display",
                                "unminified-javascript",
                                "unminified-css",
                                "unused-css-rules",
                                "largest-contentful-paint-element",
                                "preload-lcp-image",
                                "unused-javascript",
                                "efficient-animated-content",
                                "total-byte-weight"
                            ]
                        },
                        {
                            "id": "interactive",
                            "weight": 10,
                            "group": "metrics",
                            "acronym": "TTI"
                        },
                        {
                            "id": "total-blocking-time",
                            "weight": 30,
                            "group": "metrics",
                            "acronym": "TBT",
                            "relevantAudits": [
                                "long-tasks",
                                "third-party-summary",
                                "third-party-facades",
                                "bootup-time",
                                "mainthread-work-breakdown",
                                "dom-size",
                                "duplicated-javascript",
                                "legacy-javascript"
                            ]
                        },
                        {
                            "id": "cumulative-layout-shift",
                            "weight": 15,
                            "group": "metrics",
                            "acronym": "CLS",
                            "relevantAudits": [
                                "layout-shift-elements",
                                "non-composited-animations",
                                "unsized-images"
                            ]
                        },
                        {
                            "id": "max-potential-fid",
                            "weight": 0
                        },
                        {
                            "id": "first-meaningful-paint",
                            "weight": 0,
                            "acronym": "FMP"
                        },
                        {
                            "id": "render-blocking-resources",
                            "weight": 0,
                            "group": "load-opportunities"
                        },
                        {
                            "id": "uses-responsive-images",
                            "weight": 0,
                            "group": "load-opportunities"
                        },
                        {
                            "id": "offscreen-images",
                            "weight": 0,
                            "group": "load-opportunities"
                        },
                        {
                            "id": "unminified-css",
                            "weight": 0,
                            "group": "load-opportunities"
                        },
                        {
                            "id": "unminified-javascript",
                            "weight": 0,
                            "group": "load-opportunities"
                        },
                        {
                            "id": "unused-css-rules",
                            "weight": 0,
                            "group": "load-opportunities"
                        },
                        {
                            "id": "unused-javascript",
                            "weight": 0,
                            "group": "load-opportunities"
                        },
                        {
                            "id": "uses-optimized-images",
                            "weight": 0,
                            "group": "load-opportunities"
                        },
                        {
                            "id": "modern-image-formats",
                            "weight": 0,
                            "group": "load-opportunities"
                        },
                        {
                            "id": "uses-text-compression",
                            "weight": 0,
                            "group": "load-opportunities"
                        },
                        {
                            "id": "uses-rel-preconnect",
                            "weight": 0,
                            "group": "load-opportunities"
                        },
                        {
                            "id": "server-response-time",
                            "weight": 0,
                            "group": "load-opportunities"
                        },
                        {
                            "id": "redirects",
                            "weight": 0,
                            "group": "load-opportunities"
                        },
                        {
                            "id": "uses-rel-preload",
                            "weight": 0,
                            "group": "load-opportunities"
                        },
                        {
                            "id": "efficient-animated-content",
                            "weight": 0,
                            "group": "load-opportunities"
                        },
                        {
                            "id": "duplicated-javascript",
                            "weight": 0,
                            "group": "load-opportunities"
                        },
                        {
                            "id": "legacy-javascript",
                            "weight": 0,
                            "group": "load-opportunities"
                        },
                        {
                            "id": "preload-lcp-image",
                            "weight": 0,
                            "group": "load-opportunities"
                        },
                        {
                            "id": "total-byte-weight",
                            "weight": 0,
                            "group": "diagnostics"
                        },
                        {
                            "id": "uses-long-cache-ttl",
                            "weight": 0,
                            "group": "diagnostics"
                        },
                        {
                            "id": "dom-size",
                            "weight": 0,
                            "group": "diagnostics"
                        },
                        {
                            "id": "critical-request-chains",
                            "weight": 0,
                            "group": "diagnostics"
                        },
                        {
                            "id": "user-timings",
                            "weight": 0,
                            "group": "diagnostics"
                        },
                        {
                            "id": "bootup-time",
                            "weight": 0,
                            "group": "diagnostics"
                        },
                        {
                            "id": "mainthread-work-breakdown",
                            "weight": 0,
                            "group": "diagnostics"
                        },
                        {
                            "id": "font-display",
                            "weight": 0,
                            "group": "diagnostics"
                        },
                        {
                            "id": "performance-budget",
                            "weight": 0,
                            "group": "budgets"
                        },
                        {
                            "id": "timing-budget",
                            "weight": 0,
                            "group": "budgets"
                        },
                        {
                            "id": "resource-summary",
                            "weight": 0,
                            "group": "diagnostics"
                        },
                        {
                            "id": "third-party-summary",
                            "weight": 0,
                            "group": "diagnostics"
                        },
                        {
                            "id": "third-party-facades",
                            "weight": 0,
                            "group": "diagnostics"
                        },
                        {
                            "id": "largest-contentful-paint-element",
                            "weight": 0,
                            "group": "diagnostics"
                        },
                        {
                            "id": "layout-shift-elements",
                            "weight": 0,
                            "group": "diagnostics"
                        },
                        {
                            "id": "uses-passive-event-listeners",
                            "weight": 0,
                            "group": "diagnostics"
                        },
                        {
                            "id": "no-document-write",
                            "weight": 0,
                            "group": "diagnostics"
                        },
                        {
                            "id": "long-tasks",
                            "weight": 0,
                            "group": "diagnostics"
                        },
                        {
                            "id": "non-composited-animations",
                            "weight": 0,
                            "group": "diagnostics"
                        },
                        {
                            "id": "unsized-images",
                            "weight": 0,
                            "group": "diagnostics"
                        },
                        {
                            "id": "network-requests",
                            "weight": 0
                        },
                        {
                            "id": "network-rtt",
                            "weight": 0
                        },
                        {
                            "id": "network-server-latency",
                            "weight": 0
                        },
                        {
                            "id": "main-thread-tasks",
                            "weight": 0
                        },
                        {
                            "id": "diagnostics",
                            "weight": 0
                        },
                        {
                            "id": "metrics",
                            "weight": 0
                        },
                        {
                            "id": "screenshot-thumbnails",
                            "weight": 0
                        },
                        {
                            "id": "final-screenshot",
                            "weight": 0
                        },
                        {
                            "id": "script-treemap-data",
                            "weight": 0
                        }
                    ]
                }
            },
        },
        "analysisUTCTimestamp": "2021-07-28T17:14:02.604Z"
    },
}