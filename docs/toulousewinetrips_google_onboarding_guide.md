# Google Onboarding Guide — `toulousewinetrips.fr`

## Goal
Use this guide as a **working sheet + execution checklist** when onboarding a new client, especially when the client does not know what has already been set up.

This version is designed to be tested first on **toulousewinetrips.fr** so the process can later be reused for all future clients.

---

## How to use this guide
For each section:
- first **check whether something already exists**
- then **record the status**
- then either **request access**, **create the asset**, or **configure it**
- when finished, mark the item as **Done**

Recommended statuses:
- Not checked
- Exists / no access
- Exists / access confirmed
- Does not exist
- Created
- Configured
- Done

---

# PART 1 — Client / Asset Identification

## 1.1 Basic project information
Fill this in first.

- Client / project name: Toulouse Wine Trips
- Main domain: `toulousewinetrips.fr`
- Main website URL: `https://toulousewinetrips.fr`
- Business type: local business / tourism activity
- Main contact person:
- Contact email:
- Contact phone:
- Country:
- Main city / service area:
- Notes:

## 1.2 Core questions to ask at onboarding
Ask these before touching anything.

1. Do you already use a Google account for the business?
2. Does the business already have a Google Business Profile?
3. Has Search Console ever been installed?
4. Has Google Analytics ever been installed?
5. Has Tag Manager ever been installed?
6. Who manages the domain name?
7. Who manages the hosting?
8. Who can edit the website?
9. Does anyone have access to DNS settings?
10. Are there any previous freelancers / agencies with access?

## 1.3 Access register
Create and maintain this table for the project.

| Asset | Exists? | Access status | Owner / Admin known? | Action needed |
|---|---|---:|---|---|
| Domain registrar |  |  |  |  |
| Hosting account |  |  |  |  |
| Website CMS / builder |  |  |  |  |
| Google Business Profile |  |  |  |  |
| Search Console |  |  |  |  |
| GA4 |  |  |  |  |
| Tag Manager |  |  |  |  |
| Looker Studio |  |  |  |  |
| Google Ads (if any) |  |  |  |  |

---

# PART 2 — Technical Access Before Anything Else

## 2.1 Confirm domain control
You need to know who controls the domain because this affects Search Console verification and sometimes email setup.

Check and record:
- registrar name
- registrar login available?
- DNS editable?
- nameservers provider
- renewal date if known

## 2.2 Confirm hosting / website access
You need the ability to install tracking and sometimes edit meta files or headers.

Check and record:
- hosting provider
- CMS / website builder used
- admin URL
- admin access confirmed?
- developer access needed?

## 2.3 Confirm your working Google account
Decide which account you use to build the system.

Recommended setup:
- professional Google account = primary long-term admin
- personal Google account = backup admin only

For the test setup on `toulousewinetrips.fr`, record:
- account used for setup:
- future transfer needed?: yes / no

---

# PART 3 — Google Business Profile Audit and Setup

Use this part only if the business is local and eligible for a Google Business Profile.

## 3.1 Check whether a profile already exists
Search the business name and business phone on Google Maps / Search.

Check:
- existing profile found?
- duplicate profiles?
- wrong profile?
- suspended profile?

Record:
- profile URL:
- profile name:
- profile status:

## 3.2 If the profile exists
Do the following:
1. request or confirm access
2. verify your role
3. note whether you are manager, owner, or primary owner
4. add your long-term professional Google account when possible
5. add the listing to your client structure / business group when appropriate

Track:
- role confirmed?
- professional account added?
- personal account backup added?

## 3.3 If the profile does not exist
Create it.

Information to prepare:
- official business name
- primary category
- secondary categories
- phone number
- website URL
- business address or service area
- opening hours
- business description
- services / products
- photos

Then:
1. create the profile
2. complete verification
3. complete all profile fields
4. upload initial photos
5. check that map pin is correct

## 3.4 GBP optimization checklist
Once access exists, complete this checklist.

- Primary category correct
- Secondary categories added
- Business description written
- Phone number correct
- Website link correct
- Hours correct
- Holiday hours policy planned
- Services added
- Products added if relevant
- Photos uploaded
- Logo uploaded
- Cover photo uploaded
- Messaging / calls / booking features reviewed
- Review reply process defined

## 3.5 GBP working sheet
| Task | Status | Notes |
|---|---|---|
| Existing profile checked |  |  |
| Access requested / confirmed |  |  |
| Role verified |  |  |
| Professional account added |  |  |
| Profile verified |  |  |
| Categories set |  |  |
| Description written |  |  |
| Hours set |  |  |
| Services added |  |  |
| Photos uploaded |  |  |
| Review process defined |  |  |

---

# PART 4 — Google Search Console Audit and Setup

## 4.1 Check whether Search Console already exists
Log into Google Search Console with your working account and look for:
- a domain property for `toulousewinetrips.fr`
- any URL-prefix property

Record:
- no property exists
- property exists but no access
- property exists and access confirmed
- property type: domain / URL-prefix

## 4.2 Preferred setup
Preferred setup is:
- **domain property** for full coverage

Why:
- tracks all protocols and subdomains
- cleaner long-term structure

## 4.3 If Search Console exists and you have access
Do this:
1. confirm property type
2. confirm your permission level
3. check users and permissions
4. add long-term professional account
5. keep backup admin if needed

## 4.4 If Search Console does not exist
Create it.

Recommended order:
1. add a **domain property**
2. verify via DNS record
3. confirm verification works
4. document where verification was made

Record:
- DNS provider used for verification
- TXT record added by whom
- verification date

## 4.5 Search Console configuration checklist
After access is confirmed:

- Domain property created or confirmed
- Sitemap located
- Sitemap submitted
- Index coverage reviewed
- Manual actions checked
- Security issues checked
- Core Web Vitals reviewed
- HTTPS reviewed
- Performance baseline exported or noted
- Brand queries identified
- Non-brand opportunities identified

## 4.6 Search Console working sheet
| Task | Status | Notes |
|---|---|---|
| Property checked |  |  |
| Correct property type |  |  |
| DNS verification completed |  |  |
| Users checked |  |  |
| Professional account added |  |  |
| Sitemap submitted |  |  |
| Coverage reviewed |  |  |
| Core Web Vitals reviewed |  |  |
| Baseline recorded |  |  |

---

# PART 5 — Sitemap and Indexation Check

## 5.1 Find the sitemap
Check common locations:
- `/sitemap.xml`
- `/sitemap_index.xml`

Record:
- sitemap URL:
- valid / invalid:

## 5.2 Check robots.txt
Check:
- `/robots.txt`

Review:
- sitemap declared?
- important pages blocked?
- staging rules accidentally blocking site?

## 5.3 Indexation checklist
Review in Search Console:
- pages indexed
- pages excluded
- 404 errors
- redirect issues
- canonical issues
- duplicate pages

Record major issues and priority.

---

# PART 6 — Google Analytics 4 Audit and Setup

## 6.1 Check whether GA4 already exists
Questions to answer:
- does a GA4 property already exist?
- do you have access?
- is the website actually receiving data?

Record:
- property name:
- property ID:
- access confirmed?
- data flowing?: yes / no

## 6.2 If GA4 exists
Do this:
1. check admin access
2. add professional account
3. confirm data stream exists
4. confirm data collection is active
5. review enhanced measurement

## 6.3 If GA4 does not exist
Create it.

Prepare:
- account name
- property name
- business time zone
- currency
- web stream for the domain

Then:
1. create GA4 account/property
2. create web data stream
3. install tracking
4. confirm real-time data
5. document property details

## 6.4 GA4 baseline configuration
Complete this checklist:
- web stream created
- enhanced measurement enabled
- internal traffic rules reviewed
- unwanted referrals reviewed
- Google signals policy reviewed if relevant
- Search Console linked if possible
- conversions identified

## 6.5 Basic conversions to track
For a tourism business like Toulouse Wine Trips, define these at minimum:
- contact form submission
- booking request sent
- phone click
- email click
- WhatsApp click if used
- itinerary / map click if relevant

## 6.6 GA4 working sheet
| Task | Status | Notes |
|---|---|---|
| GA4 checked |  |  |
| Access confirmed |  |  |
| Professional account added |  |  |
| Data stream configured |  |  |
| Tracking installed |  |  |
| Real-time test passed |  |  |
| Search Console linked |  |  |
| Conversions defined |  |  |

---

# PART 7 — Google Tag Manager Audit and Setup

## 7.1 Decide whether GTM is needed
For a simple site, direct GA4 install may be enough.
For a site that will evolve, GTM is better.

Recommended question:
- Will I need flexible event tracking later?

If yes, use GTM.

## 7.2 Check whether GTM already exists
Record:
- container exists?
- access confirmed?
- installed on site?

## 7.3 If GTM does not exist
Create:
1. GTM account
2. web container
3. install container on site
4. publish initial version

## 7.4 Initial GTM plan
At minimum prepare tracking for:
- GA4 page view tag
- contact form submission
- phone click
- outbound booking click

## 7.5 GTM working sheet
| Task | Status | Notes |
|---|---|---|
| GTM checked |  |  |
| Container exists / created |  |  |
| Access confirmed |  |  |
| Installed on site |  |  |
| Initial tags published |  |  |

---

# PART 8 — Website Quality and SEO Baseline Audit

This is not only about creating accounts. You also need a baseline of the website itself.

## 8.1 Core business pages check
Confirm these pages exist and are usable:
- home page
- contact page
- legal pages
- privacy policy
- service / tour pages
- booking or enquiry page

## 8.2 Basic on-page SEO check
For key pages, check:
- title tag present
- meta description present
- H1 present
- page targets a clear keyword intent
- internal links exist
- images have alt text where relevant

## 8.3 Local SEO check
For a local tourism business, check:
- consistent business name
- consistent phone
- consistent address / service area
- city/location pages if relevant
- embedded map if useful

## 8.4 Technical baseline
Check:
- HTTPS works
- mobile rendering acceptable
- page speed acceptable
- indexable pages only
- no major broken links

## 8.5 Website baseline working sheet
| Task | Status | Notes |
|---|---|---|
| Main pages reviewed |  |  |
| On-page SEO checked |  |  |
| Local SEO consistency checked |  |  |
| Technical issues noted |  |  |
| Priority fixes listed |  |  |

---

# PART 9 — Reporting and Documentation Layer

## 9.1 Create a master client record
For each client, store in one place:
- domain
- website URL
- Google account used
- GBP URL
- Search Console property
- GA4 property
- GTM container ID
- registrar
- hosting
- CMS
- main contact
- backup contact
- current access status

## 9.2 Create a simple dashboard status view
For each client, track:
- GBP: yes / no / access missing
- Search Console: yes / no / access missing
- GA4: yes / no / access missing
- GTM: yes / no / access missing
- Reporting: yes / no

## 9.3 Save proof of setup
For every completed step, save:
- screenshots
- property IDs
- URLs
- verification date
- who granted access

This prevents future confusion.

---

# PART 10 — Recommended Order of Execution for `toulousewinetrips.fr`

Use this exact order for the test project.

## Stage A — Discovery
1. Fill the project information sheet
2. Identify domain registrar, hosting, and CMS
3. Confirm which Google account will be used for setup
4. Check whether GBP exists
5. Check whether Search Console exists
6. Check whether GA4 exists
7. Check whether GTM exists

## Stage B — Access foundation
8. Confirm domain / DNS access
9. Confirm website admin access
10. Add your long-term admin Google account where possible
11. Record all access statuses

## Stage C — Search Console first
12. Create or confirm Search Console domain property
13. Verify via DNS if needed
14. Submit sitemap
15. Review indexation and coverage

## Stage D — Analytics and tracking
16. Create or confirm GA4
17. Install GA4 or GTM
18. Test real-time tracking
19. Define and set up conversions
20. Link GA4 with Search Console

## Stage E — Business Profile
21. Create or claim GBP if the business is eligible
22. Verify access and roles
23. Complete the profile fully
24. Add images, services, description, and hours

## Stage F — SEO baseline
25. Review pages, titles, metadata, and local SEO consistency
26. Note priority fixes
27. Record baseline metrics

## Stage G — Documentation and repeatability
28. Save all IDs, URLs, screenshots, and statuses
29. Update your central tracker
30. Turn this completed process into your reusable onboarding SOP

---

# PART 11 — Final Deliverables for a Fully Onboarded Client

A client is considered fully onboarded when you have all of the following:

- confirmed domain / DNS control path
- confirmed website admin path
- Search Console set up and accessible
- sitemap submitted
- GA4 set up and collecting data
- GTM set up if needed
- GBP claimed / created / optimized if relevant
- baseline SEO issues documented
- conversions defined
- all assets recorded in your master tracker

---

# PART 12 — Reusable Client Onboarding Template

Copy this mini-checklist for every future client.

## Access
- Domain registrar known
- DNS access path known
- Hosting known
- Website admin access confirmed
- Working Google account defined

## Google assets
- GBP checked
- Search Console checked
- GA4 checked
- GTM checked

## Setup
- Search Console verified
- Sitemap submitted
- GA4 installed
- Conversions configured
- GBP optimized

## Audit
- Indexation checked
- Core website pages checked
- Local SEO consistency checked
- Priority fixes listed

## Documentation
- URLs saved
- IDs saved
- screenshots saved
- tracker updated

---

# Suggested next conversation blocks

1. Discovery checklist for `toulousewinetrips.fr`
2. Search Console setup for `toulousewinetrips.fr`
3. GA4 and GTM setup for `toulousewinetrips.fr`
4. Google Business Profile setup for `toulousewinetrips.fr`
5. SEO baseline audit for `toulousewinetrips.fr`
6. Final reusable onboarding SOP for all future clients

